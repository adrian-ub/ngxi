import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFujifilmXappIcon],svg[arcticons-fujifilm-xapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 34.113h-3.4a3.63 3.63 0 0 1-2.033-.622L9.933 14.51a3.63 3.63 0 0 0-2.033-.622H4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 34.113h3.4c.725 0 1.433-.216 2.033-.622L38.067 14.51a3.63 3.63 0 0 1 2.032-.622H43.5"></svg:path>`,
})
export class ArcticonsFujifilmXappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
