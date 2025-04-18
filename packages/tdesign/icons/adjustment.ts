import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAdjustmentIcon],svg[tdesign-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M5.17 4a3.001 3.001 0 0 1 5.66 0H22v2H10.83a3.001 3.001 0 0 1-5.66 0H2V4zm8 7a3.001 3.001 0 0 1 5.66 0H22v2h-3.17a3.001 3.001 0 0 1-5.66 0H2v-2zM16 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-8 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.83 0a3.001 3.001 0 0 1 5.66 0H22v2H10.83a3.001 3.001 0 0 1-5.66 0H2v-2z"></svg:path>`,
})
export class TdesignAdjustmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
