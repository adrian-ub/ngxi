import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolOkIcon],svg[websymbol-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1179 72Q929 294 579 822l-115 179Q320 821 0 501l107-107l286 250q150-150 279-271.5T877.5 185T1009 74t77-59l21-14q4 0 11 2t26 19.5t35 49.5"></svg:path>`,
})
export class WebsymbolOkIcon {
  readonly viewBox = input("0 0 1179 1000")
  readonly width = input("1.18em")
  readonly height = input("1em")
}
