import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCnnTurkIcon],svg[arcticons-cnn-turk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 8.395v16.13L30.94 8.395v16.13L18.38 8.395v16.13h-5.816a8.065 8.065 0 0 1 0-16.13h2.829m12.237 31.21v-8h2.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7h-2.6m2.698-.003l2.502 2.503m-28.33-7.9h5.2m-2.6 8v-8m8.966 0v5.3c0 1.5 1.2 2.7 2.6 2.7s2.6-1.2 2.6-2.7v-5.3"></svg:path><svg:circle cx="20.066" cy="29.025" r=".8" fill="currentColor"></svg:circle><svg:circle cx="17.266" cy="29.025" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.3 31.605v8m0-2.8l4.2-5.2m0 8l-3.2-4"></svg:path>`,
})
export class ArcticonsCnnTurkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
