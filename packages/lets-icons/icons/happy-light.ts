import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHappyLightIcon],svg[lets-icons-happy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M9.835 13.25a2.502 2.502 0 0 0 4.33 0"></svg:path><svg:rect width="3" height="2" x="7" y="8" fill="currentColor" rx="1"></svg:rect><svg:rect width="3" height="2" x="14" y="8" fill="currentColor" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsHappyLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
