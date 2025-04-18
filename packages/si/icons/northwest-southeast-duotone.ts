import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNorthwestSoutheastDuotoneIcon],svg[si-northwest-southeast-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 6l12 12M6 6v4m0-4h4m8 12v-4m0 4h-4"></svg:path>`,
})
export class SiNorthwestSoutheastDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
