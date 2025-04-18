import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWallpaperSlideshowSharpIcon],svg[material-symbols-light-wallpaper-slideshow-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.558 8.212q-.31 0-.52-.21t-.211-.52t.21-.522t.52-.21t.521.21t.21.52t-.21.521t-.52.21m-7.404 5.481l1.892-2.461l1.589 1.885l2.454-3.077l2.757 3.653zM3.5 20V6.616h1V19h12.385v1zm3-10.817V3h5.808v1H7.5v5.183zM6.5 17v-5.433h1V16h4.808v1zm8.192 0v-1H19.5v-4.433h1V17zM19.5 9.183V4h-4.808V3H20.5v6.183z"></svg:path>`,
})
export class MaterialSymbolsLightWallpaperSlideshowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
