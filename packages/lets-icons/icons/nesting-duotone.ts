import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNestingDuotoneIcon],svg[lets-icons-nesting-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:rect width="4" height="4" x="18" y="15" fill="currentColor" fill-opacity=".25" rx="2" transform="rotate(90 18 15)"></svg:rect><svg:rect width="4" height="4" x="6" y="8" fill="currentColor" fill-opacity=".25" rx="2" transform="rotate(-90 6 8)"></svg:rect><svg:path d="M8 8v5c0 1.886 0 2.828.586 3.414S10.114 17 12 17h2"></svg:path></svg:g>`,
})
export class LetsIconsNestingDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
