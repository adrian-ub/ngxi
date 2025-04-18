import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRedditIcon],svg[arcticons-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.44 22.51a3.11 3.11 0 1 0 3.11 3.11a3.12 3.12 0 0 0-3.11-3.11m15.11 0a3.1 3.1 0 0 0-3.1 3.11h0a3.11 3.11 0 1 0 3.1-3.11M14.77 32.67a16.58 16.58 0 0 0 13.06 2.41a15.8 15.8 0 0 0 5.52-2.49M20 17.08c.54-.06 1.64-.16 2.18-.2s1.21-.05 1.81-.05A29.2 29.2 0 0 1 35.26 19A4.41 4.41 0 0 1 39 16.83a4.65 4.65 0 0 1 4.5 4.79h0a5 5 0 0 1-1.07 3.11a7.6 7.6 0 0 1 1.07 3.77c0 6.5-8.73 11.67-19.5 11.68h0C13.23 40.18 4.5 35 4.5 28.5h0a7.7 7.7 0 0 1 1.07-3.78a5 5 0 0 1-1.07-3.1A4.65 4.65 0 0 1 9 16.83h0A4.42 4.42 0 0 1 12.75 19A25.8 25.8 0 0 1 20 17.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.19 11.02l-4.78-.82l1.35 6.63"></svg:path><svg:circle cx="28.7" cy="11.34" r="3.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsRedditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
