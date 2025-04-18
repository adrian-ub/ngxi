import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMinusIcon],svg[ci-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13v-2h14v2H5Z"></svg:path>`,
})
export class CiMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
