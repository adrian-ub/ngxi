import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowUpLeftIcon],svg[jam-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.757 3.828v5.586a1 1 0 0 1-2 0v-8a.997.997 0 0 1 1-1h8a1 1 0 1 1 0 2H4.172l6.778 6.778a1 1 0 1 1-1.414 1.415z"></svg:path>`,
})
export class JamArrowUpLeftIcon {
  readonly viewBox = input("-6 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
