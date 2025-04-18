import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherAlignCenterIcon],svg[feather-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 10H6m15-4H3m18 8H3m15 4H6"></svg:path>`,
})
export class FeatherAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
