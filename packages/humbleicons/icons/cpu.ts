import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCpuIcon],svg[humbleicons-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v3m6-3v3m3 3h3m-3 6h3m-6 3v3m-6-3v3m-3-6H3m3-6H3m6.5 4.5v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1M7 18h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1"></svg:path>`,
})
export class HumbleiconsCpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
