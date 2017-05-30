# Code-Presenting

---

```python
from time import localtime

activities = {8: 'Sleeping', 9: 'Commuting', 17: 'Working',
              18: 'Commuting', 20: 'Eating', 22: 'Resting' }

time_now = localtime()
hour = time_now.tm_hour

for activity_time in sorted(activities.keys()):
    if hour < activity_time:
        print activities[activity_time]
        break
else:
    print 'Unknown, AFK or sleeping!'
```

##### Does this message have room to appear?

---

### Markdown Code-Block
#### The Basics

+++

```python
import sys
try:
    total = sum(int(arg) for arg in sys.argv[1:])
    print 'sum =', total
except ValueError:
    print 'Please supply integer arguments'
```

###### The basics let you present <p> any code block with syntax highlighting.

+++

### Markdown Code-Block
##### Using
#### Code-Presenting

+++

```python
import sys
try:
    total = sum(int(arg) for arg in sys.argv[1:])
    print 'sum =', total
except ValueError:
    print 'Please supply integer arguments'
```

@[1]
@[2-4]
@[3]
@[5-6]

###### Step-thru each highlighted code-fragment <p> just like you would in your IDE.


+++

### Markdown Code-Block
##### Using
#### Code-Presenting
#### With Annotations

+++

```python
import sys
try:
    total = sum(int(arg) for arg in sys.argv[1:])
    print 'sum =', total
except ValueError:
    print 'Please supply integer arguments'
```

@[1](Import sys for access to argv.)
@[2-4](Try summing ints passed as args.)
@[3](The real work is done here.)
@[5-6](Just in case, handle invalid args.)

---?code=src/go/server.go

---?code=src/javascript/config.js

---?code=src/elixir/monitor.ex

---

### Learn By Example
#### View The [Presentation Markdown](https://github.com/gitpitch/code-presenting/blob/master/PITCHME.md)
