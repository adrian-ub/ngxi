import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLinearIcon],svg[gg-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.035 12.943a8.96 8.96 0 0 0 2.587 5.421a8.96 8.96 0 0 0 5.42 2.587zM3 11.494l9.492 9.492a9 9 0 0 0 2.378-.459L3.46 9.115A9 9 0 0 0 3 11.494m.867-3.384l12.009 12.009a9 9 0 0 0 1.773-1.123L4.99 6.336A9 9 0 0 0 3.867 8.11m1.796-2.515a9 9 0 0 1 12.728 12.728z"></svg:path>`,
})
export class GgLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
