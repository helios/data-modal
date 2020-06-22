
const encodeTrackDatasourceOtherConfigurator = genomeId => {

    return {
        isJSON: false,
        genomeId,
        suffix: '.other.txt',
        dataSetPathPrefix: 'https://www.encodeproject.org',
        urlPrefix: 'https://s3.amazonaws.com/igv.org.app/encode/',
        dataSetPath: undefined,
        addIndexColumn: false,
        columns:
            [
                'ID',           // hide
                'Assembly',     // hide
                'Biosample',
                'AssayType',
                'Target',
                'BioRep',
                'TechRep',
                'OutputType',
                'Format',
                'Lab',
                'HREF',         // hide
                'Accession',
                'Experiment'
            ],
        titles:
            {
                AssayType: 'Assay Type'
            },
        hiddenColumns:
            [
                'ID',
                'Assembly',
                'HREF'
            ],
        parser: undefined,
        selectionHandler: selectionList => {
            return selectionList.map(({ name, HREF }) => {
                return { name, url: HREF }
            })
        }

    }

}

export { encodeTrackDatasourceOtherConfigurator }