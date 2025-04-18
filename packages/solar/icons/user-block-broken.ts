import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserBlockBrokenIcon],svg[solar-user-block-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M15.5 13.535C14.47 13.195 13.275 13 12 13c-3.866 0-7 1.79-7 4c0 .345 0 .68.027 1M13 20.987Q12.525 21 12 21c-1.722 0-3.02-.108-4-.305m11.95-3.645l-3.9 3.9"></svg:path><svg:circle cx="18" cy="19" r="3"></svg:circle></svg:g>`,
})
export class SolarUserBlockBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
