                let N = 4;
                function add(X, Y, Z)
                {
                    let i, j;
                    for (i = 0; i < N; i++)
                        for (j = 0; j < N; j++)
                            Z[i][j] = X[i][j] + Y[i][j];
                }
                
                    let X = [ [1, 1, 1, 1],
                                    [2, 2, 2, 2],
                                    [3, 3, 3, 3],
                                    [4, 4, 4, 4]];
                
                    let Y = [ [1, 1, 1, 1],
                                    [2, 2, 2, 2],
                                    [3, 3, 3, 3],
                                    [4, 4, 4, 4]];
                
                    let Z = new Array(N);
                    for (let k = 0; k < N; k++)
                        Z[k] = new Array(N);
                        
                    let i, j;
                    add(X, Y, Z);
                
                    document.write("Result matrix is <br>");
                    for (i = 0; i < N; i++)
                    {
                        for (j = 0; j < N; j++)
                            document.write(Z[i][j] + " ");
                        document.write("<br>");
                    }
            