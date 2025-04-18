import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDeleteIcon],svg[ic-sharp-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21h12V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></svg:path>`,
})
export class IcSharpDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
