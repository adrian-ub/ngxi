import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMacFillIcon],svg[ri-mac-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18v2l2 1v1H8l-.004-.996L10 20v-2H2.992A1 1 0 0 1 2 16.992V4.008C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.985c0 .557-.455 1.008-.992 1.008zM4 14v2h16v-2z"></svg:path>`,
})
export class RiMacFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
