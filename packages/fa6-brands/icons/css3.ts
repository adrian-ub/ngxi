import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsCss3Icon],svg[fa6-brands-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m480 32l-64 368l-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4l18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82z"></svg:path>`,
})
export class Fa6BrandsCss3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
