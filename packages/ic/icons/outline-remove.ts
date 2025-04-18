import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineRemoveIcon],svg[ic-outline-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13H5v-2h14z"></svg:path>`,
})
export class IcOutlineRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
