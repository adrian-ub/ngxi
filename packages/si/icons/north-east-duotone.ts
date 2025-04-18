import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNorthEastDuotoneIcon],svg[si-north-east-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 16l8-8m0 0v5m0-5h-5"></svg:path>`,
})
export class SiNorthEastDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
