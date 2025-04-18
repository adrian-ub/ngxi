import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFoodtrayIcon],svg[whh-foodtray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 640H32q-13 0-22.5-9.5T0 608q0-188 116.5-320.5T416 128q13 0 22.5-9.5T448 96t-9.5-22.5T416 64t-22.5-9.5T384 32t9.5-22.5T416 0h192q13 0 22.5 9.5T640 32t-9.5 22.5T608 64t-22.5 9.5T576 96t9.5 22.5T608 128q183 27 299.5 159.5T1024 608q0 13-9.5 22.5T992 640M32 704h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 768H32q-13 0-22.5-9.5T0 736t9.5-22.5T32 704"></svg:path>`,
})
export class WhhFoodtrayIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
