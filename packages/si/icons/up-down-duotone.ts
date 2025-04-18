import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siUpDownDuotoneIcon],svg[si-up-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m0-16L9 7m3-3l3 3m-3 13l-3-3m3 3l3-3"></svg:path>`,
})
export class SiUpDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
