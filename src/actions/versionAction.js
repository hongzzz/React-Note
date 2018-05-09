export const VERSION_UPDATE = 'VERSION_UPDATE';

export const updateVersion = (version) => ({
    type: VERSION_UPDATE,
    version
});
