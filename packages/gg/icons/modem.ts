import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggModemIcon],svg[gg-modem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 16.634a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M5.866 3.134a1 1 0 1 0-1 1.732l13.455 7.768H2v4a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-4zM20 14.634H4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgModemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
