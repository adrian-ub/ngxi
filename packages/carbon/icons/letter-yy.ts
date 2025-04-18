import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterYyIcon],svg[carbon-letter-yy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-2l-2 7l-2-7H7l3 9v5h2v-5zm8 4l-2 7.52L19.08 13H17l3.15 9.87l-.62 2.13H17v2h2.26a2 2 0 0 0 1.91-1.42L25 13z"></svg:path>`,
})
export class CarbonLetterYyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
