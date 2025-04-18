import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRailwaystationphotosIcon],svg[arcticons-railwaystationphotos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19.75" cy="6.61" r="2.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.25" cy="6.61" r="2.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.68" cy="31.93" r="2.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.32" cy="31.93" r="2.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.64 6.61h-2a4.6 4.6 0 0 0-4.59 4.59v23a4.6 4.6 0 0 0 4.59 4.59h16.7a4.6 4.6 0 0 0 4.59-4.59v-23a4.6 4.6 0 0 0-4.59-4.59h-2"></svg:path><svg:rect width="19.17" height="9.93" x="14.41" y="14.26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.83"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.61 14.26v-2.1a.93.93 0 0 0-.92-.92h-9.38a.93.93 0 0 0-.92.92v2.1m-2.74 24.48L9.28 43.5m23.07-4.76l6.37 4.76M21.86 6.61h4.28"></svg:path>`,
})
export class ArcticonsRailwaystationphotosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
