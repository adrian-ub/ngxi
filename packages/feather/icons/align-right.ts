import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherAlignRightIcon],svg[feather-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10H7m14-4H3m18 8H3m18 4H7"></svg:path>`,
})
export class FeatherAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
