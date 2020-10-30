@Injectable()
export class CategoriaService{
    constructor(public http: HttpClient){
    }

    findAll(): Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias/1`);
    }
}
