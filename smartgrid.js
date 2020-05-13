module.exports = {
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1170px',
        fields: '40px' // >= offset/2
    },
    breakPoints: {
        xl: {
          width: '1050px',
        },
        lg: {
            width: '992px',
        },
        md: {
            width: '768px'
        },
        sm: {
            width: '576px'
        },
        xs: {
            width: '480px',
            // fields: '15px'
        },
      //   xxs: {
			// width: '350px',
      //   }
	},
	detailedCalc: true
};
