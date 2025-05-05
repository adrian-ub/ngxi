import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconReceiveIcon],svg[picon-receive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 5l2-2q5 0 1 1q-2 1 2 1q6-4 0 2H0"></svg:path>`,
})
export class PiconReceiveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
