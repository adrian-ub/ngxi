import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBraIcon],svg[picon-bra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4c5 6-11 6-6 0V1q3 9 6 0"></svg:path>`,
})
export class PiconBraIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
