export const RawData = [
    { name: 'Read File', value: `data = pd.read_csv('./PATH/FILE.csv')` },
    { name: 'Fetch Specific Column', value: `col1 = data['COLUMN-NAME']` },
    { name: 'Mean of Columns', value: `col2 = col2.groupby(col2.index // 24).mean()` },
    { name: 'Split Row Value', value: `col3 = col3.str.split('T').str[0]` },
    { name: 'Get Unique Rows', value: `col4 = col3.nunique()` },
    { name: 'Repeat Rows', value: `col5 = col1.repeat(NUM)` },
    { name: 'Concat', value: `CONC = pd.concat([col1, col2, col3], axis=1)` },
    { name: 'Save File', value: `CONC.to_csv('.PATH/FILE.csv',index=False)` },
]