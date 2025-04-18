import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCitizenAlertIcon],svg[arcticons-citizen-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.997 19.357a4.643 4.643 0 1 0 0 9.286v5.854C9.2 34.497 4.5 29.797 4.5 24s4.7-10.497 10.497-10.497z"></svg:path><svg:circle cx="24" cy="24" r="4.257" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.003 19.357a4.643 4.643 0 1 1 0 9.286v5.854C38.8 34.497 43.5 29.797 43.5 24s-4.7-10.497-10.497-10.497z"></svg:path>`,
})
export class ArcticonsCitizenAlertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
