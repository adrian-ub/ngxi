import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGifLiveWallpaperIcon],svg[arcticons-gif-live-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="21.63" height="39" x="13.18" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.8"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.18 9.42h21.64M13.18 38.31h21.64M21.17 6.99h5.66"></svg:path><svg:circle cx="18.84" cy="6.99" r=".71" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.72 19.82v8.36m-2.63-5.56a2.8 2.8 0 0 0-2.94-2.8a2.91 2.91 0 0 0-2.65 3v2.6a2.8 2.8 0 0 0 2.8 2.8h0a2.79 2.79 0 0 0 2.79-2.8H19.3m8.02-5.6h4.18M27.32 24h2.72m-2.72-4.18v8.36"></svg:path>`,
})
export class ArcticonsGifLiveWallpaperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
