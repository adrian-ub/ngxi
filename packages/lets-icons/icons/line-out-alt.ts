import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLineOutAltIcon],svg[lets-icons-line-out-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="6" height="6" x="9" y="15" rx="2" transform="rotate(90 9 15)"></svg:rect><svg:path d="m18 3l3 4l-3 4"></svg:path><svg:path d="M21 7h-7c-3.771 0-5.657 0-6.828 1.172S6 11.229 6 15"></svg:path></svg:g>`,
})
export class LetsIconsLineOutAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
