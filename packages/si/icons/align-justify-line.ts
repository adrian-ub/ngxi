import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignJustifyLineIcon],svg[si-align-justify-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 10h18M3 6h18M3 14h18M3 18h18"></svg:path>`,
})
export class SiAlignJustifyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
