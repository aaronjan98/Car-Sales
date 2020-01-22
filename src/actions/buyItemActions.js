

export const buyItem = item => {
    console.log('this is item', item);

    return {
      type: 'ADD_FEATURE',
      payload: item
    }
};

export const removeFeature = item => {
    return {
      type: 'REMOVE_FEATURE',
      payload: item
    }
};