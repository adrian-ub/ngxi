import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSaveAllIcon],svg[ic-sharp-save-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 6h11l4 4v11H6zm2 2h7v3H8zm5.5 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 2h12v2H4v10H2z"></svg:path>`,
})
export class IcSharpSaveAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
