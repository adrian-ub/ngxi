import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArrowAltCircleUpIcon],svg[la-arrow-alt-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m0 4l-4 4h3v10h2V13h3z"></svg:path>`,
})
export class LaArrowAltCircleUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
