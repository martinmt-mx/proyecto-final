module.exports = {
    isInstanceOf: (instance, classDefinition) => (
        instance && instance.constructor.name == classDefinition.name
    )
}