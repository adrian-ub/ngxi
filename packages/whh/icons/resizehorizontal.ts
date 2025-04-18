import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhResizehorizontalIcon],svg[whh-resizehorizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1015 343L736 632q-9 9-21.5 9t-21.5-9l-44-46q-9-9-9-22.5t9-22.5l151-156H224l151 156q9 9 9 22.5t-9 22.5l-44 46q-9 9-21.5 9t-21.5-9L9 343q-9-9-9-22.5T9 298L288 9q9-9 21.5-9T331 9l44 46q9 9 9 22.5t-9 22.5L223 257h578L649 100q-9-9-9-22.5t9-22.5l44-46q9-9 21.5-9T736 9l279 289q9 9 9 22.5t-9 22.5"></svg:path>`,
})
export class WhhResizehorizontalIcon {
  readonly viewBox = input("0 0 1024 641")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
