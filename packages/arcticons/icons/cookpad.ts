import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCookpadIcon],svg[arcticons-cookpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.022 25.77a7 7 0 0 0 1.728.23a7 7 0 1 0 0-14a7 7 0 0 0-5.541 2.75A7 7 0 0 0 23.25 8.5a7 7 0 0 0-6.555 4.594A7 7 0 0 0 5.25 18.5a7 7 0 0 0 6.225 6.945L9.662 39.5H32.25l2.168-16.805m-1.266 9.82H14.534"></svg:path>`,
})
export class ArcticonsCookpadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
