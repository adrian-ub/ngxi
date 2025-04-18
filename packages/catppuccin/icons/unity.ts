import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinUnityIcon],svg[catppuccin-unity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m9.5 1l5 3v5.5m-1 3l-5.5 3l-5.5-3m-1-3V3.83L6.5 1m-5 3L8 8v7.5M14.5 4L8 8"></svg:path>`,
})
export class CatppuccinUnityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
