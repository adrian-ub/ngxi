import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumTurnR1Icon],svg[circum-turn-r-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.061 9.509v10.93a.51.51 0 0 0 .5.5a.5.5 0 0 0 .5-.5V9.509a3.5 3.5 0 0 1 3.5-3.5h9.9l.01 1.44a.5.5 0 0 0 .81.4l2.47-1.96a.5.5 0 0 0 0-.78l-2.49-1.94a.5.5 0 0 0-.81.4l.01 1.44h-9.9a4.507 4.507 0 0 0-4.5 4.5"></svg:path>`,
})
export class CircumTurnR1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
