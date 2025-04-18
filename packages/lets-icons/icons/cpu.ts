import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCpuIcon],svg[lets-icons-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M7 11c0-1.886 0-2.828.586-3.414S9.114 7 11 7h2c1.886 0 2.828 0 3.414.586S17 9.114 17 11v2c0 1.886 0 2.828-.586 3.414S14.886 17 13 17h-2c-1.886 0-2.828 0-3.414-.586S7 14.886 7 13z"></svg:path><svg:rect width="4" height="4" x="10" y="10" fill="currentColor" rx="1"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 7V4m4 3V4m3 6h3m-3 4h3m-10 6v-3m4 3v-3M4 10h3m-3 4h3"></svg:path></svg:g>`,
})
export class LetsIconsCpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
