import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGamepadIcon],svg[picon-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5c4 6 4-7-1-3c-5-4-5 9-1 3M2 5L1 4l1-1l1 1m3 1L5 4l1-1l1 1"></svg:path>`,
})
export class PiconGamepadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
