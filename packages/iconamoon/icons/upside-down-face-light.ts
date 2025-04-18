import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonUpsideDownFaceLightIcon],svg[iconamoon-upside-down-face-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="1.5"></svg:circle><svg:path stroke-width="2.25" d="M9.01 14.5v.01H9v-.01zm6 0v.01H15v-.01z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M8.535 10A4 4 0 0 1 12 8c1.48 0 2.773.804 3.465 2"></svg:path></svg:g>`,
})
export class IconamoonUpsideDownFaceLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
