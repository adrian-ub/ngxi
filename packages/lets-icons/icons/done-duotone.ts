import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneDuotoneIcon],svg[lets-icons-done-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-width="1.2" d="m8.5 11l2.894 2.894a.15.15 0 0 0 .212 0L19.5 6"></svg:path></svg:g>`,
})
export class LetsIconsDoneDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
