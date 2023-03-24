import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Menu} from '../listItems';

function getItemByGroup(items: Menu[], parentId: number) {
  const data = groupBy(items, ['parentId'])[parentId];
  console.log('data => ', data);
  return data as Menu[];
}

function groupBy<T>(values: T[], keys: string[], process?: Function) {
  const grouped: any = {};
  values.forEach(function (a, k) {
    keys
      .reduce(function (o, k, i) {
        o[a[k as keyof T]] =
          o[a[k as keyof T]] || (i + 1 === keys.length ? [] : {});
        return o[a[k as keyof T]];
      }, grouped)
      .push(a);
  });
  if (!!process && typeof process === 'function') {
    process(grouped);
  }
  return grouped;
}
// function bindLevel(group: Menu[]) {
//   if (!group) return;
//   if (group.length > 0) {
//     group.forEach(i => {
//       if (i.isChild) {
//         console.log(`    ${i.name}`);
//       } else {
//         console.log(`${i.name}`);
//       }
//       bindLevel(getItemByGroup(group, i.id));
//       // // $(container).append(__ul);

//       // if(!i.isChild){
//       //     console.log("Parent", i.name)
//       // }
//     });
//   }
// }

// data.forEach(i => {
//   bindLevel(getItemByGroup(data, i.id));
// });

type Props = {
  data: Menu[];
};

const TestRecursive = ({data}: Props) => {
  if (data.length < 0) return <></>;
  return (
    <Box sx={{mt: 2}}>
      {data.map(i => {
        const data1 = getItemByGroup(data, i.id);
        console.log(data1);
        return data1?.map(i => {
          return (
            <Box sx={{ml: 3}}>
              {i.isChild ? (
                <Typography sx={{ml: 5}}>{i.name}</Typography>
              ) : i.isParent && !i.isMainParent ? (
                <Typography>{i.name}</Typography>
              ) : (
                <></>
              )}
              {/* <TestRecursive data={data} /> */}
            </Box>
          );
        });
      })}
    </Box>
  );
};

export default TestRecursive;
