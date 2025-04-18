import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumTurnL1Icon],svg[circum-turn-l-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.939 9.509v10.93a.51.51 0 0 1-.5.5a.5.5 0 0 1-.5-.5V9.509a3.5 3.5 0 0 0-3.5-3.5h-9.9l-.01 1.44a.5.5 0 0 1-.81.4l-2.47-1.96a.5.5 0 0 1 0-.78l2.49-1.94a.5.5 0 0 1 .81.4l-.01 1.44h9.9a4.507 4.507 0 0 1 4.5 4.5"></svg:path>`,
})
export class CircumTurnL1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
