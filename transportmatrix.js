var N = 4;
	function transpose(A) {
		for (i = 0; i < N; i++)
			for (j = i + 1; j < N; j++) {
				var temp = A[i][j];
				A[i][j] = A[j][i];
				A[j][i] = temp;
			}
	}

	
		var A = [ [ 1, 1, 1, 1 ],
				[ 2, 2, 2, 2 ],
				[ 3, 3, 3, 3 ],
				[ 4, 4, 4, 4 ] ];

		transpose(A);

		document.write("Transport matrix is <br/>");
		for (i = 0; i < N; i++) {
			for (j = 0; j < N; j++)
				document.write(A[i][j] + " ");
			document.write("\<br/>");
		}
