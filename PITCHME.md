# Code
# Presenting

---

### Markdown Code-Block
#### The Basic Syntax

![Press Down Key](assets/down-arrow.png)

+++

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

###### Block basics let you present any <p> static **code block** with syntax highlighting

---

### Markdown Code-Block
##### Using
#### Code-Presenting

![Press Down Key](assets/down-arrow.png)

+++

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

@[1]
@[3-4]
@[6-7]
@[9-14]

###### Code-presenting lets you focus <p> on individual **code-fragments**


---

### Markdown Code-Block
##### Using
#### Code-Presenting
#### With Annotations

![Press Down Key](assets/down-arrow.png)

+++

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

@[1](Python from..import statement)
@[3-4](Python dictionary initialization block)
@[6-7](Python working with time)
@[9-14](Python for..else statement)

---

### Markdown Code-Delimiter
#### The Basic Syntax

```
---?code=path/to/code.file
```

![Press Down Key](assets/down-arrow.png)

+++?code=src/python/time.py

###### Delimiter basics let you present any <p> repo **code file** with syntax highlighting

---

### Markdown Code-Delimiter
##### Using
#### Code-Presenting

![Press Down Key](assets/down-arrow.png)

+++?code=src/javascript/config.js

@[1-3]
@[5-8]
@[10-16]
@[18-24]

###### Code-presenting lets you focus <p> on individual **code-fragments**

---

### Markdown Code-Delimiter
##### Using
#### Code-Presenting
#### With Annotations

![Press Down Key](assets/down-arrow.png)

+++?code=src/elixir/monitor.ex

@[11-14](Elixir module-attributes as constants)
@[22-28](Elixir with-statement for conciseness)
@[171-177](Elixir case-statement pattern matching)
@[179-185](Elixir pipe-mechanism for composing functions)

---

### Learn By Example
#### View The [Presentation Markdown](https://github.com/gitpitch/code-presenting/blob/master/PITCHME.md)
