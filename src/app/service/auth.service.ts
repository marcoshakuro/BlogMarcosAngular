import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';

import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
    
  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(`${environment.server}${environment.port}/usuarios/logar`, userLogin)
  }

  cadastrar(user:User): Observable<User>{
    return this.http.post<User>(`${environment.server}${environment.port}/usuarios/cadastrar`, user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`${environment.server}${environment.port}/usuarios/${id}`, {headers: {'Authorization': environment.token}})
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  atualizar(user: User): Observable<User> {
    return this.http.put<User>(`${environment.server}${environment.port}/usuarios`, user,{headers: {'Authorization': environment.token}})
  }
}
