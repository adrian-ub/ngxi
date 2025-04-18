import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsColorSwatchIcon],svg[majesticons-color-swatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M19 22a3 3 0 0 0 3-3v-4a3.001 3.001 0 0 0-2.361-2.932L13 18.708v.792c0 .58-.17 1.439-.694 2.167a3.212 3.212 0 0 1-.275.333H19zm-6-4.707l5.738-5.738a3.001 3.001 0 0 0-.445-3.676L16.12 5.707A3 3 0 0 0 13 5v12.294zM9 2a3 3 0 0 1 3 3v14.5c0 .42-.13 1.061-.506 1.583c-.357.496-.957.917-1.994.917H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4zM7 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsColorSwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
