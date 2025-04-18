import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineFastForwardIcon],svg[ic-outline-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9.86L18.03 12L15 14.14zm-9 0L9.03 12L6 14.14zM13 6v12l8.5-6zM4 6v12l8.5-6z"></svg:path>`,
})
export class IcOutlineFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
