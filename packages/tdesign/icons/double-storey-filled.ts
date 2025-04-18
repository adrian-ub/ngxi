import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDoubleStoreyFilledIcon],svg[tdesign-double-storey-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h20v2h-1v8h1v2h-6v-7H8v7H2v-2h1v-8H2z"></svg:path><svg:path fill="currentColor" d="M10 22v-5h4v5zm9-20H5v2h1v4h12V4h1zm-5.998 1.998v2.004h-2.004V3.998z"></svg:path>`,
})
export class TdesignDoubleStoreyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
