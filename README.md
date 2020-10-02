# Indian Cities JSON
A .json file containing 1220 indian cities and their respective states.

After hundreds of unsuccessful searches for a rails gem to add the cities and states I select a option which could work the way I wanted it to, I gave up. Then, I began start searching for a .json file from which I could directly fetch the information and make it work, there too, I failed, I couldn't find the "perfect" file.

So, I downloaded the largest Excel sheet of cities I found, removed every column I didn't need and converted it to a .json.

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
    },
    {   "id": "3",
        "name":  "Agra",
        "state": "Uttar Pradesh"
    }
]
```

and if you don't see your city here, create a pull request and add it to this list.
