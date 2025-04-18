import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWaterOffIcon],svg[mdi-water-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-4.55-4.55A5.96 5.96 0 0 1 12 20c-3.31 0-6-2.69-6-6c0-1.33.67-2.97 1.55-4.56L1.11 3l1.28-1.27l19.72 19.73zM18 14c0-4-6-10.75-6-10.75s-1.16 1.3-2.45 3.1l8.4 8.4c.05-.25.05-.5.05-.75"></svg:path>`,
})
export class MdiWaterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
