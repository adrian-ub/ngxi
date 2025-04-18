import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmpidoParkenIcon],svg[arcticons-ampido-parken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.807 12.338l18.658-.004V31.3h-9.143v-9.576h-9.514l-.004-9.389M7.54 17.008l-.005 18.658h18.966v-9.143h-9.576v-9.514l-9.389-.004"></svg:path>`,
})
export class ArcticonsAmpidoParkenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
