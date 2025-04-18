import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineNatureIcon],svg[ic-outline-nature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16.12h-.03c3.49-.4 6.2-3.36 6.2-6.95c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6zM7.17 9.17c0-2.76 2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5s-5-2.24-5-5"></svg:path>`,
})
export class IcOutlineNatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
