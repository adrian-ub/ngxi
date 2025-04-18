import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightEqualizerIcon],svg[mdi-light-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v17h-3V4zm7 6v11h-3V10zM6 13v8H3v-8zm8-10H9v19h5zm7 6h-5v13h5zM7 12H2v10h5z"></svg:path>`,
})
export class MdiLightEqualizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
