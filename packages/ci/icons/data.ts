import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDataIcon],svg[ci-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12v5c0 1.657-2.686 3-6 3s-6-1.343-6-3v-5m12 0V7m0 5c0 1.657-2.686 3-6 3s-6-1.343-6-3m12-5c0-1.657-2.686-3-6-3S6 5.343 6 7m12 0c0 1.657-2.686 3-6 3S6 8.657 6 7m0 5V7"></svg:path>`,
})
export class CiDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
