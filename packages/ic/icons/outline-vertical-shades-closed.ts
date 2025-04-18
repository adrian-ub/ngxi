import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineVerticalShadesClosedIcon],svg[ic-outline-vertical-shades-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3H4v16H2v2h20v-2zM13 5h1.5v14H13zm-2 14H9.5V5H11zM6 5h1.5v14H6zm10.5 14V5H18v14z"></svg:path>`,
})
export class IcOutlineVerticalShadesClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
