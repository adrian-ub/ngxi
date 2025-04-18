import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsOffLightIcon],svg[lets-icons-off-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="14" height="10" x="5" y="7" stroke="currentColor" rx="2"></svg:rect><svg:rect width="5" height="6" x="7" y="9" fill="currentColor" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsOffLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
