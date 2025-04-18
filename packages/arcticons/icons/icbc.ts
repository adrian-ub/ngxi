import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIcbcIcon],svg[arcticons-icbc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.27 42.5H5.5V28.44h12.46v-8.88H5.5V5.5h15.77m5.46 0H42.5v14.06H30.04v8.88H42.5V42.5H26.73"></svg:path>`,
})
export class ArcticonsIcbcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
