import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowMissedIcon],svg[zmdi-arrow-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m354 85l30 30l-192 192L43 158v98H0V85h171v43H73l119 119z"></svg:path>`,
})
export class ZmdiArrowMissedIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
