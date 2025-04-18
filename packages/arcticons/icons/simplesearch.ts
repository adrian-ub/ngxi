import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimplesearchIcon],svg[arcticons-simplesearch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.54 9.53a13.77 13.77 0 0 1 19.46 0h0a13.77 13.77 0 0 1 .74 18.67l.52.51H32l10.5 10.5l-3.28 3.29L28.72 32v-1.73l-.52-.52A13.77 13.77 0 0 1 9.53 9.54Zm3.05 3.06a9.45 9.45 0 1 0 13.37 0a9.46 9.46 0 0 0-13.37 0m17.16 15.62l-1.55 1.54"></svg:path>`,
})
export class ArcticonsSimplesearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
