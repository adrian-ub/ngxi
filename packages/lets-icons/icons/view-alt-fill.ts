import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsViewAltFillIcon],svg[lets-icons-view-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="4" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-width="2" d="M21 12s-1-8-9-8s-9 8-9 8"></svg:path></svg:g>`,
})
export class LetsIconsViewAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
