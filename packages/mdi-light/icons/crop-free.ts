import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightCropFreeIcon],svg[mdi-light-crop-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h2v1H6a2 2 0 0 0-2 2v2H3V7a3 3 0 0 1 3-3M4 18a2 2 0 0 0 2 2h2v1H6a3 3 0 0 1-3-3v-2h1zM17 4a3 3 0 0 1 3 3v2h-1V7a2 2 0 0 0-2-2h-2V4zm3 14a3 3 0 0 1-3 3h-2v-1h2a2 2 0 0 0 2-2v-2h1z"></svg:path>`,
})
export class MdiLightCropFreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
