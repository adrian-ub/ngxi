import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsInfoAltDuotoneIcon],svg[lets-icons-info-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="8" cy="8" r="8" fill="currentColor" fill-opacity=".25" transform="matrix(-1 0 0 1 20 4)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 10.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h.5m-1-7h.01"></svg:path></svg:g>`,
})
export class LetsIconsInfoAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
