import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiMitsubishiIcon],svg[cbi-mitsubishi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.583 9.208L12 14.958l3.417-5.791L12 3.375ZM12 14.958l3.333 5.667H22l-3.333-5.667Zm-3.333 5.667L12 14.958H5.333L2 20.625Z"></svg:path>`,
})
export class CbiMitsubishiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
