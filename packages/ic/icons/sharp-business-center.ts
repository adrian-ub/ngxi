import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBusinessCenterIcon],svg[ic-sharp-business-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16v-1H3.01v6H21v-6h-7v1zm12-9h-6V5l-2-2h-4L8 5v2H2v7h8v-2h4v2h8zm-8 0h-4V5h4z"></svg:path>`,
})
export class IcSharpBusinessCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
