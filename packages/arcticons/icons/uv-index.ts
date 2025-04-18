import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUvIndexIcon],svg[arcticons-uv-index-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.567 24c0 9.15-7.417 16.567-16.567 16.567h0C14.85 40.567 7.433 33.15 7.433 24q0 0 0 0C7.433 14.85 14.85 7.433 24 7.433h0c9.15 0 16.567 7.417 16.567 16.567"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.22 24c0 6.197-5.023 11.22-11.22 11.22h0c-6.197 0-11.22-5.023-11.22-11.22h0c0-6.197 5.023-11.22 11.22-11.22h0c6.197 0 11.22 5.023 11.22 11.22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.968 20.555l-2.3 6.89l-2.298-6.89m-7.338 0v4.608a2.29 2.29 0 0 0 2.298 2.282h.002a2.29 2.29 0 0 0 2.298-2.282h0v-4.608"></svg:path>`,
})
export class ArcticonsUvIndexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
