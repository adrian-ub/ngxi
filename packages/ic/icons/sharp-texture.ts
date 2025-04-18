import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTextureIcon],svg[ic-sharp-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.66 3L3.07 19.59V21h1.41L21.07 4.42V3zm-7.71 0l-8.88 8.88v2.83L14.78 3zM3.07 3v4l4-4zm18 18v-4l-4 4zm-8.88 0l8.88-8.88V9.29L9.36 21z"></svg:path>`,
})
export class IcSharpTextureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
