import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFdroidAltIcon],svg[arcticons-fdroid-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.992" cy="15.177" r="3.503" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.008" cy="15.177" r="3.503" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="31.315" height="12.988" x="8.351" y="8.683" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.8"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 5.834l3.663 3.663"></svg:path><svg:rect width="31.315" height="17.308" x="8.351" y="24.671" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.8"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.5 5.854l-3.663 3.663"></svg:path><svg:circle cx="24.009" cy="33.325" r="5.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.45 35.121a3.136 3.136 0 1 0-.171-3.32"></svg:path>`,
})
export class ArcticonsFdroidAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
