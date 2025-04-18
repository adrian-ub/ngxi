import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLapse2Icon],svg[arcticons-lapse2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 29.46l10.09-4.85L24 7L13.91 24.61zM22.81 41v-9.11l-10.09-4.85L5 41zm2.38-9.11l10.09-4.85L43 41H25.19z"></svg:path>`,
})
export class ArcticonsLapse2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
