import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTransparencyIcon],svg[arcticons-transparency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.276 11.744h5.204v5.204h-5.204zM12.147 5.5h5.204v5.204h-5.204zm-6.238 6.298h5.204v5.204H5.909zm18.808-6.281v5.26h6.241v6.039h11.133v-11.3zm5.084 12.636v16.7c0 1.334-1.101 2.318-1.864 2.648l-9.54 5V24.232h6.216v-6.08z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.398 41.824l4.215-7.62c-.212 2.72 1.98 3.73 3.72 4.137"></svg:path>`,
})
export class ArcticonsTransparencyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
