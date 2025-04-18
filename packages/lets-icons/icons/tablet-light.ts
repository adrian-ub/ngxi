import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTabletLightIcon],svg[lets-icons-tablet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="15" height="19" x="4.5" y="2.5" rx="2.5"></svg:rect><svg:path d="M15 18H9"></svg:path></svg:g>`,
})
export class LetsIconsTabletLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
