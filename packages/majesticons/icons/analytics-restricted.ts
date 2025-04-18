import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsRestrictedIcon],svg[majesticons-analytics-restricted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.975 7.975a3.5 3.5 0 1 0-4.95-4.95m4.95 4.95a3.5 3.5 0 1 1-4.95-4.95m4.95 4.95L18.5 5.5l-2.475-2.475"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 11.502a6.5 6.5 0 0 1-2.5.498A6.5 6.5 0 0 1 13 8.966V16a1 1 0 1 1-2 0V8a1 1 0 0 1 1.178-.984A6.5 6.5 0 0 1 12.498 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3zM8 10a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m8 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsAnalyticsRestrictedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
