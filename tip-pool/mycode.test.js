describe("appendDeleteBtn Function", function () {
  it("should append a delete button to the given table row", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.className).toEqual("deleteBtn");
    expect(newTr.firstChild.innerText).toEqual("X");
  });
});

describe("removeEle Function", function () {
  it("should remove the given table row from the DOM", function () {
    let newTr = document.createElement("tr");
    document.body.appendChild(newTr);

    removeElement(newTr);

    expect(document.body.contains(newTr)).toEqual(false);
  });
});
