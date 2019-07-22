@title[Code Presenting]
## Code
## Presenting

---
@title[Fenced Code Blocks]

### `Fenced Code Blocks`
#### Snippets embedded in your Markdown 

@fa[arrow-down]

+++?color=#272c34
@title[Sample Code Block]

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

@snap[south span-100 text-06]
Fenced code blocks let you present **code snippets** with auto-syntax highlighting.
@snapend

---

### `Fenced Code Blocks`
### Code Presenting

@fa[arrow-down]

+++?color=#272c34
@title[Sample Code Presenting]

```go
package main

import (
	"fmt"
	"golang.org/x/net/websocket"
	"log"
	"net/http"
)

func echoHandler(ws *websocket.Conn) {
	msg := make([]byte, 512)
	n, err := ws.Read(msg)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Receive: %s\n", msg[:n])

	m, err := ws.Write(msg[:n])
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Send: %s\n", msg[:m])
}
```


@[1]
@[3-8]
@[10-24]

@snap[south span-100 text-06]
Use code-presenting to *step-into* code directly on your slides.
@snapend


---

### `Fenced Code Blocks`
### Code Presenting
### With Annotations

@fa[arrow-down]

+++?color=#272c34
@title[Sample With Annotations]

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

@snap[south span-100 text-09]
@[1](Use code presenting annotations to document indivudual lines of code.)
@[6-7](Or focus your audience's attention on entire blocks of code.)
@[9-14](You can even *step-into* loops to demonstrate logical code flow.) 
@snapend

---
@title[Code Delimiters]

### `Code Delimiters`
#### For any file in your Repo

```
                  ---?code=path/to/source.file
```

@fa[arrow-down]

+++?code=src/elixir/monitor.ex&lang=elixir&color=#272c34
@title[Sample With Annotations]

@snap[south span-100 text-08]
@[11-14](Code delimters deliver powerful code presenting features on your slides.)
@[22-28](You can *step-into* any repo source file and focus on any line or block of code.)
@[179-185](With optional annotations to help guide or educate your audience.)
@snapend

---
@title[Pro Code Step-and-Zoom]

@snap[west span-45 text-08]
For even more powerful GitPitch code presenting features learn 
about<br>[Pro Code Step-and-Zoom @fa[external-link]](https://gitpitch.com/docs/code-features/pro-code-zoom)
@snapend

@img[east span-45](assets/img/pro-code-step-and-zoom.gif)

---

### Learn By Example
#### View The [Presentation Markdown](https://github.com/gitpitch/code-presenting/blob/master/PITCHME.md)

@snap[south span-100 text-06]
For complete Code Presenting documentation, see the [GitPitch Docs @fa[external-link]](https://gitpitch.com/docs/code-features)
@snapend
