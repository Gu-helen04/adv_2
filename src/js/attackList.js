export default function attackList(obj) {
    const specials = obj.special;
    const result = [];
  
    specials.forEach((item) => {
      const {
        id, name, description = 'Описание недоступно', icon,
      } = item;
  
      result.push({
        id, name, description, icon,
      });
    });
    return result;
  }
  