---
title: Inf Soup
---


# Introduction to Babushka Theory

Let $A: X\rightarrow Y'$, $A^*: Y\rightarrow X'$ be bounded linear operators.
Define the graph norm
\[
\|v\|_Y \triangleq \|A^*v\|_{X'}, \quad\forall v \in Y
\]

As a result,
\[
\|A^*\| \triangleq \sup_{v\in Y}\frac{\|A^* v\|_{X'}}{\|v\|_Y} \equiv 1
\]
Now let us look at $\|A\|$. We have
\[
\|A\| \triangleq \sup_{w\in X}\frac{\|A w\|_{X'}}{\|w\|_X}.
\]
We show $\langle Aw, Aw\rangle_{Y'} = \langle w,w\rangle_X$. Let $R_A$ be
the Riesz map $R_A : A \rightarrow A'$.
\begin{align*}
\langle Aw, Aw\rangle_{Y'} & = \langle R_Y^{-1} A w, Aw\rangle_{Y, Y'}
\end{align*}
Set $\tilde w \triangleq R_Y^{-1} A w$:
\begin{align*}
\langle Aw, Aw\rangle_{Y'} & = \langle R_Y^{-1} A w, Aw\rangle_{Y, Y'}\\
& = \langle \tilde w, Aw\rangle_{Y, Y'}\\
& = \langle w, R_X w\rangle_{X, X'}\\
& = \langle w, w\rangle_{X}
\end{align*}
since $R_X = A^* R_Y^{-1} A$, so 
\[
\|A\| \equiv 1
\]
