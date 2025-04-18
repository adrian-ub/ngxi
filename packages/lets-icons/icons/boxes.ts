import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxesIcon],svg[lets-icons-boxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="8" height="8" x="5" y="4" rx="1.8"></svg:rect><svg:path d="M4 13.8A1.8 1.8 0 0 1 5.8 12h4.4a1.8 1.8 0 0 1 1.8 1.8V20H5.8A1.8 1.8 0 0 1 4 18.2zm8 0a1.8 1.8 0 0 1 1.8-1.8h4.4a1.8 1.8 0 0 1 1.8 1.8v4.4a1.8 1.8 0 0 1-1.8 1.8H12z"></svg:path><svg:path stroke-linecap="round" d="M16 12v3m-8-3v3M9 4v3"></svg:path></svg:g>`,
})
export class LetsIconsBoxesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
