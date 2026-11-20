# Motor 11 — Report and handoff format

The report is in **English**, with a **Portuguese summary at the top**. Use fact IDs (F01, F02...)
so sections A to F never repeat the same evidence. Section G must stand alone.

---

## RESUMO EM PORTUGUÊS

Ten lines at most: the Champion (or NO CHAMPION QUALIFIED), its editorial line, why it wins, the
main uncertainty, what is still pending, credits spent, and the approval status.

Then the **ranking table for the creator**, in plain Portuguese, **one theme per row** (never themes
as columns), ordered by position:

| # | Tema | Segmento | Do que trata | Ponto mais forte | Ponto mais fraco | Decisão |

- **Tema:** the full working theme name, never an internal code like D1.
- **Segmento:** A Stability Builder / B Options Builder / C Freedom Seeker.
- **Do que trata:** one plain sentence, with at most one number.
- **Ponto mais forte / mais fraco:** a few words each, no jargon (say "interesse do público
  crescendo", not "demand +60.7%").
- **Decisão:** Campeão / Reserva / Atualizar vídeo existente / Em observação / Descartado — with
  what happens next (e.g. the month it becomes relevant).

Close with one sentence explaining why #1 beat the others. Every assessed theme appears, including
the rejected ones.

## A. EXECUTION

Execution date; mode (AUTO_DISCOVERY / USER_DIRECTED); scope; Source and Destination IDs; tools
actually used (searches, pages opened, vidIQ calls with query and credits, balance before and
after); coverage gaps and pages that could not be accessed; channel files missing, if any.

## B. SOURCE HIGHLIGHTS

The strongest highlight per source or domain, BEFORE any ranking. For each: fact ID, claim, TRUTH
label, dated URL, Source-to-Claim Fit, status (VERIFIED / UNRESOLVED), population and scope, limits,
shared origins with other sources.

## C. CONVERGENCE / DIVERGENCE

Only if meaningful. Where sources agree, where they diverge, and why it matters.

## D. OPPORTUNITIES

AUTO: up to 3 ranked PRODUCE, plus the material MONITOR / DISCARD with their reasons.
USER_DIRECTED: the user's territory only.

For each opportunity:
- development and fact IDs used
- editorial line (one of five) and segment/journey (A/B/C) with the central question it answers
- editorial value
- demand: measured (vidIQ, with limits) / documented / inferred — kept separate
- human consequence: time, family, identity, freedom
- NOW / EVERGREEN / HYBRID; horizon and maturity
- the four strategic values
- retention sequence and interpretive strain
- the eight gates, PASS / FAIL / PENDING each
- decision

Then: line and segment balance of the last 8 entries in `registro.md`, and any repetition found.

**Comparison matrix (mandatory, technical).** Before the individual opportunities, one table with every assessed
candidate as a column (PRODUCE, MONITOR and DISCARD) and, as rows, the eight comparison criteria,
repetition / line balance and the decision. Use Strong / Medium / Weak with a few words of reason —
a qualitative judgement, never an invented numeric score. The user reads this table to understand
why the Champion won and what was rejected.

## E. CHAMPION

Carry the intelligence from D. Then: theme; subtitle that explains the theme; thesis; common belief
vs. truth; contradiction; mechanism; human consequence; rationale (why now, why it wins); estimated
runtime with its reasoning; uncertainty; limits; prohibited claims.

Sequence: belief → fact → mechanism → consequence → reinterpretation → implication.

Then the two lists from SKILL.md section 7:
- **SPOKEN CLAIMS** (3 to 5, each with fact ID and built-in qualifier)
- **SOURCE NOTES** (full limits, methodology, revisions, URLs — for the description)

## F. M22 HANDOFF SUMMARY

Consolidate D and E: facts, dated sources, demand, strategic and attention intelligence, spoken
claims, source notes. Approval status as it actually is — `PENDING USER APPROVAL` until the user
approves.

## FINAL VALIDATION (before G)

PASS / FAIL / PENDING for each:
- source-to-claim fit
- highlights extracted before ranking
- dates, origins, scope and statistics
- fact vs. interpretation labelled
- no false corroboration, no false causation
- eight gates, demand, retention
- Preventive Freedom, journeys, four strategic values, human consequence
- editorial line declared; history and repetition checked
- AUTO: all four coverage areas and all PRODUCE considered / USER_DIRECTED: not auto-confirmed
- horizons and reporting limits
- spoken claims vs. source notes split
- IDs, approval status, handoff self-contained

Fix every FAIL. A mandatory evidence gap is PENDING and blocks qualification. This self-check is not
an approval and not an execution test.

## G. M22 HANDOFF (saved as `m22-handoff.md`)

One self-contained document, no placeholders, no reliance on prior conversation. It must work if
read by `/pm-22` or pasted into another tool. Include:

- Project ID (destination), Source Execution ID, approval status
- editorial line and **segment/journey** with its central question
- objective
- the full handoff from F
- all facts with dated URLs
- demand, strategic and attention intelligence
- the retention sequence
- SPOKEN CLAIMS and SOURCE NOTES
- uncertainty, limits, prohibited claims
- estimated runtime (to be confirmed by M22 against retention and production cost)
- the channel's non-negotiable rules from `0-decisoes.md`

Packaging/title, retention, the numbered script and the M33 handoff follow the user's approvals and
Motor 22's rules. Preserve existing approvals; mark any absent required approval as pending.

**No Champion:** E states the outcome; F and G are BLOCKED, listing the missing conditions.
