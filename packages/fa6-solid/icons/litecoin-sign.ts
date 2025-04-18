import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidLitecoinSignIcon],svg[fa6-solid-litecoin-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64v149.6l-40.8 11.6c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22l23.2-6.7V448c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V261.9l136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3z"></svg:path>`,
})
export class Fa6SolidLitecoinSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
