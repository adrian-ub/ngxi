import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonUnavailableDuotoneIcon],svg[iconamoon-unavailable-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="12" cy="12" r="9" opacity=".16"></svg:circle><svg:path d="M12 20a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm0-16a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10zm-8 8a7.97 7.97 0 0 1 2.343-5.657L4.93 4.93A9.97 9.97 0 0 0 2 12zm2.343-5.657A7.97 7.97 0 0 1 12 4V2a9.97 9.97 0 0 0-7.071 2.929zm-1.414 0l12.728 12.728l1.414-1.414L6.343 4.929zM20 12a7.97 7.97 0 0 1-2.343 5.657l1.414 1.414A9.97 9.97 0 0 0 22 12zm-2.343 5.657A7.97 7.97 0 0 1 12 20v2a9.97 9.97 0 0 0 7.071-2.929z"></svg:path></svg:g>`,
})
export class IconamoonUnavailableDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
