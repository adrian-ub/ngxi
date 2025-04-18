import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTapSingleIcon],svg[gg-tap-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.05 3.114c2.143 0 4.09.843 5.526 2.216L16.16 6.744a5.98 5.98 0 0 0-4.112-1.63a5.98 5.98 0 0 0-4.21 1.725L6.424 5.425a7.97 7.97 0 0 1 5.625-2.311m-1.072 8.772a1 1 0 1 1 2 0v2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M11.977 6.886a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5m3 9v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 6 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTapSingleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
