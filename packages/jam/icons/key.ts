import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamKeyIcon],svg[jam-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.612 16.337l3.746-3.747l1.027.183a5 5 0 1 0-4.039-4.039l.184 1.028l-6.994 6.994l.177 2.651l2.651.177l1.833-1.833l-.707-.707a1 1 0 0 1 1.415-1.414zm.707-13.435a7 7 0 1 1 3.715 11.84L6.137 21.64l-4.43-.295a1 1 0 0 1-.932-.932l-.295-4.43l6.898-6.898a6.99 6.99 0 0 1 1.94-6.183zm4.242 5.656A2 2 0 1 1 16.39 5.73a2 2 0 0 1-2.829 2.828"></svg:path>`,
})
export class JamKeyIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
