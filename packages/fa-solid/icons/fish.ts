import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidFishIcon],svg[fa-solid-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256L.35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416C464.56 416 576 288 576 256S464.56 96 327.1 96m87.43 184c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24c13.26 0 24 10.74 24 24c0 13.25-10.75 24-24 24"></svg:path>`,
})
export class FaSolidFishIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
