import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVoidpetGardenIcon],svg[arcticons-voidpet-garden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.077 10.134c-5.284 4.104-3.343 11.151-4.634 13.24c-1.3 2.098-8.05 8.162-12.943 2.303c.724 11.355 12.6 17.224 21.885 12.655c9.285-4.55 5.162-12.72 8.078-14.243c2.925-1.513 4.865-2.256 6.778-4.318c1.903-2.042 3.955-10.315-.01-10.315s-13.871-3.436-19.154.678"></svg:path><svg:circle cx="29.505" cy="18.017" r="3.668" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.755" cy="18.767" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsVoidpetGardenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
