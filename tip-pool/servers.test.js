describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("don't add new server on submitServerInfo() if input is empty", function () {
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
