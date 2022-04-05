const fooButton = document.querySelector("#fooButton");

fooButton.addEventListener("click", function() {
    const Foo = document.createElement("h3");
    Foo.textContent = "Foo";
    document.body.appendChild(Foo);
})

const barButton = document.querySelector("#barButton");

barButton.addEventListener("click", function() {
    const Bar = document.createElement("h3");
    Bar.textContent = "Bar";
    document.body.appendChild(Bar);
})

const fooBarButton = document.querySelector("#fooBarButton");

fooBarButton.addEventListener("click", function() {
    const FooBar = document.createElement("h2");
    FooBar.textContent = "FooBar";
    document.body.appendChild(FooBar);
})