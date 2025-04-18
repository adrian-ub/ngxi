import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidMittenIcon],svg[fa6-solid-mitten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 384H64L5.4 178.9C1.8 166.4 0 153.4 0 140.3C0 62.8 62.8 0 140.3 0h3.4c66 0 123.5 44.9 139.5 108.9l31.4 125.8l17.6-20.1c12.6-14.4 30.7-22.6 49.8-22.6h2.8c34.9 0 63.3 28.3 63.3 63.3c0 15.9-6 31.2-16.8 42.9zM32 448c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z"></svg:path>`,
})
export class Fa6SolidMittenIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
