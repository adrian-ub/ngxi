import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArrowCircleLeftIcon],svg[la-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-.719 4.594L8.875 16l6.406 6.406L16.72 21l-4-4H23v-2H12.719l4-4z"></svg:path>`,
})
export class LaArrowCircleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
