import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWallpaperIcon],svg[ic-sharp-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h7V2H2v9h2zm6 9l-4 5h12l-3-4l-2.03 2.71zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5M22 2h-9v2h7v7h2zm-2 18h-7v2h9v-9h-2zM4 13H2v9h9v-2H4z"></svg:path>`,
})
export class IcSharpWallpaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
