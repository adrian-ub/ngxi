import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAndroidIcon],svg[catppuccin-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M1.5 6.5v5m13-5v5m-11-6h9V12c0 .83-.67 1.5-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12Zm9 0c0-2.49-2.01-4-4.5-4s-4.5 1.51-4.5 4m1-5l1 1.5m6-1.5l-1 1.5m-5 11.5v2m5-2v2"></svg:path>`,
})
export class CatppuccinAndroidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
