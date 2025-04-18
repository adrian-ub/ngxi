import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFdroidIcon],svg[arcticons-fdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.99" cy="15.18" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.01" cy="15.18" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="31.32" height="12.99" x="8.35" y="8.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.8"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.83L9.16 9.5"></svg:path><svg:rect width="31.32" height="17.31" x="8.35" y="24.67" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.8"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.5 5.85l-3.66 3.67"></svg:path>`,
})
export class ArcticonsFdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
