import React from "react";
import renderer from "react-test-renderer";
import Videos from "../Videos";

// !Snapshot testing kullanıcı arayüzünün beklenmedik bir şekilde değişip değişmediğini kontrol etmemizi sağlıyor.
test("videos empty renders 'No videos found!'", () => {
  const tree = renderer.create(<Videos />).toJSON(); // DOM tree

  expect(tree).toMatchSnapshot();
});

// !İlk çalıştığında snapshot olmadığı için bir snapshot alır ve kaydeder. Daha sonra bir değişiklik meydana geldiğinde ona bakarak karşılaştırma yapar. Bu değişikliği kabul etmek istersek command olarak u -update- girmemiz yeterli olur, daha sonra snaphot güncellenecektir.

test("videos 1 item renders correctly", () => {
  const tree = renderer
    .create(<Videos videos={["udemy", "youtube", "coursera", "hackerrank"]} />)
    .toJSON(); // DOM tree

  expect(tree).toMatchSnapshot();
});
