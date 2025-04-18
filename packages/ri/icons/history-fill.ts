import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHistoryFillIcon],svg[ri-history-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2m1 5v4.585l3.243 3.243l-1.415 1.415L11 12.413V7z"></svg:path>`,
})
export class RiHistoryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
