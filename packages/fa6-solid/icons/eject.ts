import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidEjectIcon],svg[fa6-solid-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320H48c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192c9-9.9 21.8-15.5 35.3-15.5M0 432c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48s-21.5 48-48 48H48c-26.5 0-48-21.5-48-48"></svg:path>`,
})
export class Fa6SolidEjectIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
