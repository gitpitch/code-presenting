# Code-Presenting

---

## Markdown Code-Block

---

```python
# This program adds up integers in the command line
import sys
try:
    total = sum(int(arg) for arg in sys.argv[1:])
    print 'sum =', total
except ValueError:
    print 'Please supply integer arguments'
```

+++

## Code-Presenting
## Markdown Code-Block

+++

```python
# This program adds up integers in the command line
import sys
try:
    total = sum(int(arg) for arg in sys.argv[1:])
    print 'sum =', total
except ValueError:
    print 'Please supply integer arguments'
```

@[1]
@[3-5]
@[4]
4[6-7]

+++

+++

## Code-Presenting with Annotations
## Markdown Code-Block

+++

```python
# This program adds up integers in the command line
import sys
try:
    total = sum(int(arg) for arg in sys.argv[1:])
    print 'sum =', total
except ValueError:
    print 'Please supply integer arguments'
```

@[1]
@[3-5](Try adding up ints passed as args.)
@[4](The real work is done here.)
4[6-7](Handle invalid args.)

---?code=src/go/server.go

---?code=src/javascript/config.js

---?code=src/elixir/monitor.ex

---

### Learn By Example
#### View The [Presentation Markdown](https://github.com/gitpitch/code-presenting/blob/master/PITCHME.md)
