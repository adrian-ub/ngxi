import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPinIcon],svg[picon-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5L4 8V5H0q4-2 1-5h6Q4 3 8 5"></svg:path>`,
})
export class PiconPinIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
