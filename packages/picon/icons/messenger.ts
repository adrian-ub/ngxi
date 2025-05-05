import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMessengerIcon],svg[picon-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7q5 1 5-3q0-3-4-3q-5 1-3 5L0 8m3-4L1 5l2-2l2 1l2-1l-2 2"></svg:path>`,
})
export class PiconMessengerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
