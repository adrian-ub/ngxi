import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineExplicitIcon],svg[ic-outline-explicit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-4-4h-4v-2h4v-2h-4V9h4V7H9v10h6z"></svg:path>`,
})
export class IcOutlineExplicitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
