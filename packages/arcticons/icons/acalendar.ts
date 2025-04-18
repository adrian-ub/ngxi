import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAcalendarIcon],svg[arcticons-acalendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="35" height="36" x="6.5" y="7.5" rx="4" ry="4"></svg:rect><svg:path d="M33.5 4.5v6m-19-6v6"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.348 28.238A5.35 5.35 0 0 1 24 33.587h0a5.35 5.35 0 0 1-5.348-5.349v-3.476A5.35 5.35 0 0 1 24 19.413h0a5.35 5.35 0 0 1 5.348 5.349m2.14 8.825a2.14 2.14 0 0 1-2.14-2.14V19.413"></svg:path>`,
})
export class ArcticonsAcalendarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
