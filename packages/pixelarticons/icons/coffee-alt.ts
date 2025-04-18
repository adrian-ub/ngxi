import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCoffeeAltIcon],svg[pixelarticons-coffee-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H5v4h2zm4 0H9v4h2zm2 0h2v4h-2zm8 6H3v12h14v-5h4zm-2 5h-2v-3h2zM5 11h10v8H5z"></svg:path>`,
})
export class PixelarticonsCoffeeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
