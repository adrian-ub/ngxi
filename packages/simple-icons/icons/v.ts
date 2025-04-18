import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVIcon],svg[simple-icons-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.583 23.497c.067.192-.043.348-.247.348H9.074c-.408 0-.85-.311-.988-.695L.043.784C-.105.393.149.115.528.16L6.92.776c.405.039.844.383.978.767zM23.473.16l-6.392.616c-.406.039-.844.383-.978.768l-3.827 10.99l3.678 10.509L23.959.783c.137-.383-.08-.662-.485-.623"></svg:path>`,
})
export class SimpleIconsVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
