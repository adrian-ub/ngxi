import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLineInAltIcon],svg[lets-icons-line-in-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="6" height="6" x="15" y="9" rx="2" transform="rotate(-90 15 9)"></svg:rect><svg:path d="m6 21l-3-4l3-4"></svg:path><svg:path d="M3 17h7c3.771 0 5.657 0 6.828-1.172S18 12.771 18 9"></svg:path></svg:g>`,
})
export class LetsIconsLineInAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
