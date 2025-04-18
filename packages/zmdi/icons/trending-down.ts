import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTrendingDownIcon],svg[zmdi-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m299 320l49-49l-105-104l-85 85L0 94l30-30l128 128l85-85l135 134l49-49v128z"></svg:path>`,
})
export class ZmdiTrendingDownIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
