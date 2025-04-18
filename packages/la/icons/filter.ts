import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFilterIcon],svg[la-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2.344l.219.281L13 16.344V28l1.594-1.188l4-3L19 23.5v-7.156l7.781-9.719l.219-.281V4zm2.281 2H24.72l-7.188 9H14.47zM15 17h2v5.5L15 24z"></svg:path>`,
})
export class LaFilterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
