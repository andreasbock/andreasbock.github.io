---
title: Limiting Procedure
usemathjax: true
---

Here's the *classical* density argument.

# Limiting Procedure

For completeness we show a standard procedure in analysis namely the limiting
procedure also sometimes called a density argument.

For $$O\in \mathbb{R}^d$$ and let $$\phi\in\mathcal{C} = X$$ be dense in a Banach space $$G$$.

The following inequality holds for some $$\phi\mapsto T\phi$$, $$T: X\rightarrow
Y$$, where $$Y$$ is a Banach space:

\begin{equation}\label{eql:1}
\| T\phi \|_Y \lesssim \| \phi\|_X,
\end{equation}

and our goal is to define $$T$$ on $$G$$. By density, there exists a sequence:
\begin{equation}
\Phi=\{\phi_n\}_{n\geq 0},
\end{equation}

 such that $$\phi_n \rightarrow \psi$$, for all $$\psi \in
G$$. Formally we define the limit:

\begin{equation}\label{eql:3}
T\psi = \lim_{n\rightarrow\infty} T \phi_n,
\end{equation}

although we have yet to determine if this limit is well-defined. From
\eqref{eql:1} we get:

\begin{equation}\label{eql:2}
\| T\phi_n - T\phi_{n+j} \|_Y \lesssim \| \phi_n - \phi_{n+j}\|_X,
\end{equation}


for integers $$n,j\geq 0$$. Since $$\Phi$$ is convergent, the right-hand side of
\eqref{eql:2} converges since $$X$$ is Banach. This implies that $$\{
T\phi_n\}_{n\geq 0}$$ is Cauchy in $$Y$$ so the left-hand side of \eqref{eql:2}
converges and  \eqref{eql:3} is well-defined. Using continuity of the norm we
verify \eqref{eql:1} for this limit:

\begin{align}
\| T \psi \|_Y & = \| \lim_{n\rightarrow\infty} T \phi_n \|_Y\\
& = \lim_{n\rightarrow\infty} \| T \phi_n \|_Y\\
& \lesssim \lim_{n\rightarrow\infty} \| \phi_n \|_Y\\
& = \| \psi \|_Y.\\
\end{align}

