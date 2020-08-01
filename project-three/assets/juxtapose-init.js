slider = new juxtapose.JXSlider('#foo',
    [
        {
            src: 'http://firstimage.jpg',
            label: '2009',
            credit: 'Image Credit'
        },
        {
            src: 'http://secondimage.jpg',
            label: '2014',
            credit: "Image Credit"
        }
    ],
    {
        animate: true,
        showLabels: true,
        showCredits: true,
        startingPosition: "50%",
        makeResponsive: true
    });
