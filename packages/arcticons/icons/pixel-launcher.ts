import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixelLauncherIcon],svg[arcticons-pixel-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.854 4.5H10.816v39h8.633V31.16h4.405c7.362 0 13.33-5.968 13.33-13.33S31.217 4.5 23.855 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.449 12.955h4.349a4.896 4.896 0 0 1 4.894 4.894h0a4.896 4.896 0 0 1-4.894 4.894h-4.35zm0 0L10.816 4.5m8.633 18.243l-8.633 7.056m17.545-13.718l6.63-5.578m-1.246 16.264l-6.125-5.863"></svg:path>`,
})
export class ArcticonsPixelLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
