import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSmookingIcon],svg[picon-smooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3Q2 3 4 0v2q3 0 1 2m2 0q0-3-2-3V0q3 0 3 4m0 3V5H7v2M0 7V5h6v2"></svg:path>`,
})
export class PiconSmookingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
