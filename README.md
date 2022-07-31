## Description

Normally, in an Angular project, different services are created for each type of object we want to execute RESTful API calls on (`GET`, `POST`, `DELETE`, etc.). The usual reason behind this is to isolate the handlers for each object and to enforce the type of data each operation returns. For example, if we have two models, `Cat` and `Dog`, we would have `CatService` and `DogService` classes to handle RESTful operations on each object.

```
export class CatService {
    list(options): Cats[] {
        // returns a list of Cats
    }
}

export class DogService {
    list(options): Dogs[] {
        // returns a list of Dogs
    }
}
```

In most cases, these services/classes have the same operations. They only differ on the object they're operating in. This project aims to provide a boilerplate for setting up a generic HTTP handler Service containing the basic operations for a REST architecture. This is to reduce code duplication and to ease up code maintenance.

## Additional Note

The idea behind this project came from this [article](https://betterprogramming.pub/a-generic-http-service-approach-for-angular-applications-a7bd8ff6a068). Kindly check the link if you want to know additional technicalities on the implementation.
