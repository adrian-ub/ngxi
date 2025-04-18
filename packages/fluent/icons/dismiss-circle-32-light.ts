import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismissCircle32LightIcon],svg[fluent-dismiss-circle-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.146 10.146a.5.5 0 0 0 0 .708L15.293 16l-5.147 5.146a.5.5 0 0 0 .708.708L16 16.707l5.146 5.147a.5.5 0 0 0 .708-.708L16.707 16l5.147-5.146a.5.5 0 0 0-.708-.708L16 15.293l-5.146-5.147a.5.5 0 0 0-.708 0M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13s13-5.82 13-13S23.18 3 16 3"></svg:path>`,
})
export class FluentDismissCircle32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
