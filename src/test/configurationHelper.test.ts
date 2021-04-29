import { expect } from "chai";
import { ConfigurationHelper } from "../configurationHelper";

describe("ConfigurationHelper Tests", function () {
    it("Should retrieve a string configuration", function () {
        let conf = ConfigurationHelper.getDefaultConfiguration(null);
        expect(conf).to.be.not.undefined;
        let value = ConfigurationHelper.retrieveStringPropertyInDefaultConf(ConfigurationHelper.BINARIES_PATH_KEY);
        expect(value).to.be.equal("${workspaceFolder}/bin");
        value = ConfigurationHelper.retrieveStringProperty(conf, "xxxxx", "default");
        expect(value).to.be.equal("default");
    });
    it("Should retrieve an object configuration", function () {
        let value = ConfigurationHelper.retrieveObjectPropertyInDefaultConf("vasm");
        // ${config:amiga-assembly.binDir}/vasmm68k_mot will be replaced by ${workspaceFolder}/bin/vasmm68k_mot
        expect(value.file).to.be.equal("${workspaceFolder}/bin/vasmm68k_mot");
        value = ConfigurationHelper.retrieveObjectPropertyInDefaultConf("vlink");
        expect(value.file).to.be.equal("${workspaceFolder}/bin/vlink");
        value = ConfigurationHelper.retrieveObjectPropertyInDefaultConf("adfgenerator");
        expect(value.ADFToolsParentDir).to.be.equal("${workspaceFolder}/bin");
    });
    it("Should retrieve a boolean configuration", function () {
        let conf = ConfigurationHelper.getDefaultConfiguration(null);
        expect(conf).to.be.not.undefined;
        let value = ConfigurationHelper.retrieveBooleanProperty(conf, "downloadBinaries", false);
        expect(value).to.be.equal(true);
        value = ConfigurationHelper.retrieveBooleanProperty(conf, "xxxxx", false);
        expect(value).to.be.equal(false);
    });
    it("Should retrieve a number configuration", function () {
        let conf = ConfigurationHelper.getDefaultConfiguration(null);
        expect(conf).to.be.not.undefined;
        let value = ConfigurationHelper.retrieveNumberProperty(conf, "format.labelToInstructionDistance", 70);
        expect(value).to.be.equal(2);
        value = ConfigurationHelper.retrieveNumberProperty(conf, "xxxxx", 70);
        expect(value).to.be.equal(70);
    });
});