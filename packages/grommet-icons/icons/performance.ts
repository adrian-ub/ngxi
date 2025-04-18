import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsPerformanceIcon],svg[grommet-icons-performance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l-2 3l-3-1l-.5-3.5L3 17l-1-3l3-2l-3-2l1-3l3.5-.5L7 3l3-1l2 3l2-3l3 1l.5 3.5L21 7l1 3l-3 2l3 2l-1 3l-3.5.5L17 21l-3 1zm0-3a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class GrommetIconsPerformanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
