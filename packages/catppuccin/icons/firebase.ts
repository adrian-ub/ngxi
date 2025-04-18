import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFirebaseIcon],svg[catppuccin-firebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="m3.5 12.5l9-8l1 9l-5 2zm0 0l5-9l1.9 2.78M3.5 12.5l1-11l3.1 3.1"></svg:path>`,
})
export class CatppuccinFirebaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
