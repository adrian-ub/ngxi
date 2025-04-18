import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siExpandMoreAltDuotoneIcon],svg[si-expand-more-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 8l8 8l8-8"></svg:path>`,
})
export class SiExpandMoreAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
