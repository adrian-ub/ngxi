import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumChat1Icon],svg[circum-chat-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.316 19.937a1.25 1.25 0 0 1-1.251-1.247v-1.716L2.068 6.56a2.5 2.5 0 0 1 2.5-2.5H19.44a2.5 2.5 0 0 1 2.5 2.5v8.41a2.5 2.5 0 0 1-2.5 2.5H6.918a1.5 1.5 0 0 0-1.06.439L4.2 19.57a1.25 1.25 0 0 1-.884.367M4.568 5.062a1.5 1.5 0 0 0-1.5 1.5L3.06 16.973v1.714a.25.25 0 0 0 .427.176L5.151 17.2a2.48 2.48 0 0 1 1.767-.732H19.44a1.5 1.5 0 0 0 1.5-1.5V6.562a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path>`,
})
export class CircumChat1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
