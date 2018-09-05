import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  
  getAuthors() {
    return ["Authors 1", "Authors 2", "Authors 3"]
  }
  
}
