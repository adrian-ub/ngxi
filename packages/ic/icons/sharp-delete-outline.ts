import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDeleteOutlineIcon],svg[ic-sharp-delete-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21h12V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></svg:path>`,
})
export class IcSharpDeleteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
