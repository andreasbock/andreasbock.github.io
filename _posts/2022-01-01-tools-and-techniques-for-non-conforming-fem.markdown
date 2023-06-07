---
title: Tools and Techniques For Analysis of Nonconforming Elements
---

# Tools and Techniques For Analysis of Nonconforming Elements

I thought these results would make for a great blog post since my memory is not
reliable and I often forget their construction. I hope this can help someone out
there!

## Inverse Inequalities

We reproduce the inequalities for convenience:
\begin{align*}
|e|\inv\ltwoe{f}^2 & \lesssim h_K^{-2}\ltwoK{f}^2
+|f|_{1,K}^2,\quad f\in H^1(K)\\
|e|\ltwoe{\jump{w}}^2 & \lesssim h_K^2
\sum_{K\in\mathcal{K}_e}\honeK{w}^2,\quad w|_K\in H^1(K).
\end{align*}
These rely mainly on trace-type results and scaling arguments cf. appendix
\ref{app:scaling}.\\

For the first we have:
\begin{align*}
\ltwoehat{\hat {f}}^2 \lesssim \|\hat{f}\|_{1,\hat K}^2  = \frac{|\hat{K}|}{|K|}\big(\|f\|_{0,K}^2 + h_K^2|f|_{1,K}^2\big),
\end{align*}
by the trace theorem and a scaling argument. Rearranging:
\begin{align*}
\frac{|K|}{|\hat K|h_K^2} \ltwoehat{\hat {f}}^2 & \lesssim h_K^{-2} \|f\|_{0,K}^2 + |f|_{1,K}^2.
\end{align*}
Now since $h_K^2$ is proportional to the area of $K$ then:
\begin{align*}
\ltwoehat{\hat {f}}^2 & \lesssim h_K^{-2} \|f\|_{0,K}^2 + |f|_{1,K}^2.
\end{align*}
Noticing that $\ltwoehat{\hat {f}}^2 = |e|\inv \ltwoe{f}^2$ completes the
result.\\

For the second:
\begin{align*}
\ltwoe{\jump{f}}^2 & = |\det B_e|\ltwoe{\jump{\hat{f}}}^2\\
& \leq |\det B_e| \sum_{K\in\mathcal{K}_e} |\hat{f}|_{1,\hat K}^2\qquad
\textnormal{\cite[Lemma 7.5.26]{brennerscott}}\\
& \leq |\det B_e| \sum_{K\in\mathcal{K}_e}|\det B_k|\inv h_K^2 |f|_{1,K}^2\\
& = \sum_{K\in\mathcal{K}_e} \frac{|e|}{|\hat{e}|}\frac{|\hat{K}|}{|K|} h_K^2
|f|_{1,K}^2.
\end{align*}
Now since $|e|^2 \simeq |K|$ by the formula for the area of a triangle,
multiplying by $|e|$ on both sides yields:
\begin{align*}
|e|\ltwoe{\jump{f}}^2 & \lesssim \sum_{K\in\mathcal{K}_e} h_K^2 |f|_{1,K}^2.
\end{align*}

\section{Error analysis for nonconforming $\mathcal{P}^1$ finite elements}

We demonstrate how to obtain a linear convergence rate for nonconforming
$\mathcal{P}^1$ finite elements (see \cite[Equation 10.3.2]{brennerscott}) for a
simple Poisson problem in $2$ dimensions where the source term is given by a
mesh-aligned function. Letting $\Omega$ denote the unit square, and $\Omega_h$ a
conforming shape-regular triangulation thereof and $\mathcal{E}_h$ its mesh
skeleton, and $Q$ denote the subset of $\mathcal{E}_h$ highlighted in figure
\ref{fig:q0h}. Then, for simplicity, we define the functional $f$ by
\[
v \mapsto f(v) = \int_Q p v \diff{x},
\]
where $p$ is a smooth polynomial defined on $Q$. In this way $f$ is a similar
object to the sources terms observed in \eqref{Bu:cont2} and \eqref{Bu:disc2}.
The variational system we will study here is:
\begin{align}
\langle\nabla u, \nabla v\rangle_{0,\Omega} = f(v), \quad\forall v\in
H_0^1(\Omega).
\end{align}
which corresponds to the strong form equation:
\begin{subequations}
\begin{align}
-\Delta u = 0 \quad & \text{in  } \Omega\setminus Q,\\
 u = 0 \quad & \text{on} \; \partial\Omega,\\
\jump{\nabla u} = p \quad & \text{on}\; Q.
\end{align}
\end{subequations}
where the last equation is understood in an integral sense, and jump across $Q$
is defined as $\jump{v}_Q = \eta_Q^+ v^+ +\eta_Q^- v^-$ and
$\eta|_{\partial\Omega}$ is the outward normal to $\Omega$. Now we define
$\Omega^-$
and $\Omega^+$ by the domains inside and outside $Q$. The connection between these
two is seen by a simple integration by parts:
\begin{align}
- \int_\Omega\Delta u v \diff{x} & = \int_{\Omega^-}\nabla u\cdot \nabla v
\diff{x} + \int_{\Omega^+}\nabla u\cdot \nabla v \diff{x}
- \int_{Q} \jump{\nabla u} v \diff{s}\\
& = \int_{\Omega^-}\nabla u\cdot \nabla v \diff{x} + \int_{\Omega^+}\nabla u\cdot \nabla v \diff{x}
- \int_{Q} p v \diff{s}\\
& = 0.
\end{align}
Letting $V_h$ denote the nonconforming $\mathcal{P}^1$ finite element space
defined over the triangulation $\Omega_h$. The discrete problem we are looking
at is:
\begin{align}
\sumks \langle\nabla u_h, \nabla v_h\rangle_{0,K} = f(\avg{v_h}), \quad\forall
v_h\in V_h.
\end{align}
Since functions in $V_h$ are not globally $H^1$ the trace is not unique on $Q$
hence the average operator present in the right-hand side. Skipping all
well-posedness theory we jump straight to the error analysis. Letting $a$, $a_h$
denote the usual bilinear forms we have for $w\in V_h$:

\newcommand{\sumesQ}{\sum_{e\in\mathcal{E}_h\setminus Q}}
\newcommand{\sumeQ}{\sum_{e\in Q}}
\newcommand{\sumksout}{\sum_{K\in\Omega_{h}^+}}
\newcommand{\sumksin}{\sum_{K\in\Omega_{h}^-}}

\begin{align*}
a_h(u-u_h, w_h) & = \sumks\langle\nabla u_h, \nabla w_h\rangle_{0,K} - \int_Q
p\avg{w_h}\diff{s}\\
& = \sumks [\langle- \Delta u_h, w_h\rangle_{0,K} + \intpk \eta\cdot\nabla u
w_h\diff{s}]  - \int_Q p\avg{w_h}\diff{s}\\
& = \sumesQ [\intep \nabla u\cdot\jump{w_h}\diff{s}] + \int_Q \jump{\nabla u
w}\diff{s}  - \int_Q p\avg{w_h}\diff{s}.
\end{align*}
Recall the following identity:
\begin{equation}
\jump{ab} = \avg{a}\jump{b} + \jump{a}\avg{b},
\end{equation}
so:
\[
\int_Q \jump{\nabla u w_h}\diff{s} =  \int_Q \avg{\nabla u}\jump{w_h} + \jump{\nabla u}\avg{w_h} \diff{s},
\]
so
\begin{align}\label{nc:eq1}
a_h(u-u_h, w_h) = \sumesQ [\intep \nabla u\cdot\jump{w_h}\diff{s}] + \int_Q
\avg{\eta \cdot \nabla u} \jump{w_h}\diff{s},
\end{align}
since $\jump{\nabla u}\avg{w_h} = p\avg{w_h}$ on $Q$. We now apply the same
methods from \cite[Chapter 10]{brennerscott}. Let $e$ be an edge of some
$K\in\Omega_h$. By \cite[Equation 10.3.8, 10.3.9]{brennerscott} there exists
some $C>0$ such that:
\[
|e|\inv \ltwoe{\xi}^2 \leq C (h_K^{-2}\ltwoK{\xi}^2 + |\xi|_{H^1(K)}^2),
\quad\forall \xi \in H^1(K).
\]
and we also use the result:
\[
|e|\ltwoe{\jump{w}}^2 \leq C\sumks h^2_K |w|_{H^1(K)}^2.
\]
The first term on the right-hand side of \eqref{nc:eq1} now becomes:
\begin{align*}
\sumesQ \intep \nabla u \cdot \jump{w_h} \diff{s} & = \sumesQ\intep
(\eta\cdot\nabla u - c_e) \nabla \cdot \jump{w_h} \diff{s}\\
 & \leq \sumesQ |e|^{-1/2} \ltwoe{\eta\cdot\nabla u - c_e}  |e|^{1/2}\ltwoe{\jump{w}}\\
 & \leq (\sumesQ |e|^{-1} \ltwoe{\eta\cdot\nabla u - c_e})^{1/2} (\sumesQ
 |e|^{1/2}\ltwoe{\jump{w}})^{1/2}.
\end{align*}
Now using the previous results and letting $\mathcal{K}_e$ define the elements
adjacent to $e$ the notation :
\begin{align*}
\sumesQ \intep \nabla u \cdot \jump{w_h} \diff{s} & 
\leq C (\sumesQ \min_{K\in\mathcal{K}_e}  (h_K^{-2}\ltwoe{\eta\cdot\nabla u -
c_e} + |u|_{H^2(K)}^2 )^{1/2}\\
& \times (\sumesQ \sum_{K\in\mathcal{K}_e} h_K^2
|w_h|_{H^1(K)}^2)^{1/2}.
\end{align*}
Selecting $c_e$ as the average of $\nabla u \cdot \eta$ on $K$ and letting
$\|w_h\|_h^2 = a_h(w_h, w_h)$:
\begin{align*}
\sumesQ \intep \nabla u \cdot \jump{w_h} \diff{s} \leq C h [\sumks \ltwoK{\Delta
u}^2]^{1/2} \|w_h\|_h.
\end{align*}
Here we have used \cite[Proposition 1.135]{ErnGuermond2013} to say
\[
\ltwoe{\eta\cdot\nabla u - c_e} \lesssim h_K |u|_{2,K}.
\]
Now we treat the second term on the right-hand side of \eqref{nc:eq1} which we
write as:
\[
\int_Q \avg{\nabla u}\cdot\jump{w_h}\diff{s} = \sumeQ \intep \frac{\nabla u^+ +
\nabla u^-}{2} \cdot\jump{w_h}\diff{s}.
\]
Now we apply the same technique from before to each term involving $u^+$ and
$u^-$, respectively. We denote by $\Omega_h^+$ the set of triangles $K \in
\Omega_h$ located outside the curve $Q$ ($\Omega_h^-$ denoting those on the
inside). Also let $\mathcal{K}_e^+$ be the set of triangles in $\Omega_h^+$
having $e$ as an edge and such that $K\in\mathcal{K}_e^+$ lies on the outside of
$Q$ with a similar definition for $\mathcal{K}_e^-$. For $u^+$:
\begin{align*}
\sumeQ \intep \nabla u^+ \cdot \jump{w_h} \diff{s} & 
\leq C (\sumeQ \min_{K\in\mathcal{K}_e^+}  (h_K^{-2}\ltwoe{\eta\cdot\nabla u^+ -
c_e} + |u^+|_{H^2(K)}^2 )^{1/2}\\
& \times (\sumesQ \sum_{K\in\mathcal{N}(e)} h_K^2
|w_h|_{H^1(K)}^2)^{1/2}\\
& \leq C h [\sumksout \ltwoK{\Delta u^+}^2]^{1/2} \|w_h\|_h.
\end{align*}
Similarly:
\begin{align*}
\sumeQ \intep \nabla u^- \cdot \jump{w_h} \diff{s} & \leq C h [\sumksin \ltwoK{\Delta
u^-}^2]^{1/2} \|w_h\|_h.
\end{align*}
Combining these results we can write:
\begin{align*}
\int_Q \avg{\nabla u}\cdot\jump{w_h}\diff{s} & \leq \frac C2 h  [\sumks\ltwoK{\Delta u}^2]^{1/2} \|w_h\|_h.
\end{align*}
Now returning to the error estimate we get:
\begin{align*}
a_h(u-u_h, w_h) \lesssim h [\sumks\ltwoK{\Delta u}^2]^{1/2} \|w_h\|_h.
\end{align*}
By a Strang type argument we know that, for integers $j \geq 1$:
\begin{align*}
\| u-u_h \|_h & \lesssim h^j [\sumks \|u\|_{2, K}]^{1/2} +  h
[\sumks\ltwoK{\Delta u}^2]^{1/2}\\
& \lesssim h [\sumks \|u\|_{2, K}]^{1/2},
\end{align*}
because $u$ is smooth locally on $K\in\Omega_h$ (approximation) and convergence
is linear in $h$ (consistency).

\chapter{Scaling Arguments}\thispagestyle{onlycount}\label{app:scaling}

Let $\hat{K}$, $K$ be convex simplices in $\mathbb R^d$ such that
$\textnormal{diam}(\hat K) = 1$ and $\psi_K: \hat{K}\rightarrow K$ be an affine
diffeomorphism with Jacobian $B_K$ and that:
\begin{align*}
|\det B_K| = \frac{|K|}{|\hat{K}|},\qquad \|B_K\| \leq
\frac{h_K}{\rho_{\hat{K}}},\qquad \|B_K\inv\| \leq \frac{h_{\hat{K}}}{\rho_K},
\end{align*}
where $h_K = \text{diam}(K)$ and $\rho_K$ is the diameter of the largest ball
inscribed in $K$, see \cite[Lemma 1.100]{ErnGuermond2013} and where the norms are
sup-norms over the components of the matrices. For shape-regular meshes this
means that there exists a constant $c>0$ such that $\|B_K\|\|B_K\inv\|\leq c$.\\

For $v\in H^k(K)$ and $\hat{v}=v\circ\psi_K$ we have:
\begin{subequations}
\begin{align}
& |\hat{v}|_{m,\hat{K}} \lesssim \|B_K\|^m |\det B_k|^{-1/2}
|v|_{m,K},\\
& |v|_{m,K} \lesssim \|B_K\inv\|^m |\det B_k|^{1/2} |\hat{v}|_{m,\hat{K}}.\label{scaling1}
\end{align}
\end{subequations}
We sketch the proof of \eqref{scaling1} for $m=0,1$, see the previous reference
for more details.\\

$m=0$:
\begin{align*}
\|v\|_{0,K}^2 & = \int_{\hat K} |\hat{v}|^2 |\det B_k| \diff{\hat{x}}\\
&= |\det B_k| \|\hat{v}\|_{0, \hat{K}}^2.
\end{align*}
$m=1$:
\begin{align*}
|v|_{1,K}^2 & = \int_{\hat K} [(\nabla_x v)\circ \psi_K]^2|\det B_k| \diff{\hat{x}}\\
& \lesssim |\det B_k|\|B_K\transp\| \int_{\hat K} [\nabla_{\hat x} \hat{v}]^2 \diff{\hat{x}}\\
& = |\det B_k|\|B_K\transp\| |\hat{v}|_{1,\hat{K}}^2.
\end{align*}
These estimates are typically used in estimating interpolation error. Indeed,
let $\pi_K v$ be the standard local interpolant of polynomial degree $m-1$, for
instance, for $v\in H^m(K)$:
\begin{align*}
\|v - \pi v\|_{m-1,K} & \lesssim |\det B_k|^{1/2}\|B_K\inv\| \|\hat{v} - \hat{\pi}
\hat{v}\|_{m-1,\hat{K}}\\
& \lesssim |\det B_k|^{1/2}\|B_K\inv\|^{m-1} \|\hat{v}\|_{2,\hat{K}}\qquad\qquad\qquad\textnormal{(Bramble-Hilbert)}\\
&\lesssim |\det B_k|^{1/2}\|B_K\inv\|^{m-1}|\det B_k|^{-1/2}\|B_K\inv\|^m  \| \|\hat{v}\|_{m,\hat{K}}\\
&\simeq \|B_K\inv\| \|v\|_{m,K}\\
&\lesssim h_K \|v\|_{m,K}.
\end{align*}



