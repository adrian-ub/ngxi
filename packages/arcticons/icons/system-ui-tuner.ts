import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSystemUiTunerIcon],svg[arcticons-system-ui-tuner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.75 4.5h-15.5a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2M23.91 11l-2.07 2.07a2.93 2.93 0 1 0 4.14 0Zm0 .04v7.08"></svg:path>`,
})
export class ArcticonsSystemUiTunerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
