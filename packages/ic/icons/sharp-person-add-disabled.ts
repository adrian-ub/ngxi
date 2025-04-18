import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPersonAddDisabledIcon],svg[ic-sharp-person-add-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.48 11.95c.17.02.34.05.52.05c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4c0 .18.03.35.05.52zm2.21 2.21L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84M0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4l1.41-1.41L1.41 1.71zM6.88 10H6v-.88z"></svg:path>`,
})
export class IcSharpPersonAddDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
