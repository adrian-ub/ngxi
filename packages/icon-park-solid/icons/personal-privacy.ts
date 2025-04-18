import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPersonalPrivacyIcon],svg[icon-park-solid-personal-privacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="currentColor"></svg:circle><svg:path d="M4 41c0-8.837 8.059-16 18-16"></svg:path><svg:path fill="currentColor" d="M27 31h14v10H27z"></svg:path><svg:path d="M37 31v-3a3 3 0 1 0-6 0v3"></svg:path></svg:g>`,
})
export class IconParkSolidPersonalPrivacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
