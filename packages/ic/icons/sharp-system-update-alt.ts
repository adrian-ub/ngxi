import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSystemUpdateAltIcon],svg[ic-sharp-system-update-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16l4-4h-3V3h-2v9H8zm9-13h-6v1.99h6v14.03H3V4.99h6V3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 13l4-4h-3V3h-2v9H8zM23 3h-8v1.99h6v14.03H3V4.99h6V3H1v18h22z"></svg:path>`,
})
export class IcSharpSystemUpdateAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
