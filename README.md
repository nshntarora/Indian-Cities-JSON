# Indian Cities JSON
a json file containing 1215 indian cities and their respective states

After hundreds of unsuccessful searches for a rails gem to add the cities and states select option which could work the way I wanted it to, I gave up. Then, I began searching for a .json from which I could directly fetch the information and make it work, there too, I failed, I couldn't find the "perfect" file.

So, I downloaded the largest Excel sheet of cities I could find, removed every column I didn't need and converted it to a JSON.

Here is a small snippet :)

```
[
    {
        "id": "1",
        "name": "Mumbai",
        "state": "Maharashtra"
    },
    {
        "id": "2",
        "name": "Delhi",
        "state": "Delhi"
    },
    {
        "id": "3",
        "name": "Bengaluru",
        "state": "Karnataka"
    }
]

```

and if you don't see your city here, create a pull request and add it to this list.
