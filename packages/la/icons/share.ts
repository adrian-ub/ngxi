import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laShareIcon],svg[la-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.719 5.281L18.28 6.72L24.563 13H11c-3.855 0-7 3.145-7 7s3.145 7 7 7v-2c-2.773 0-5-2.227-5-5s2.227-5 5-5h13.563l-6.282 6.281l1.438 1.438l8-8l.687-.719l-.687-.719z"></svg:path>`,
})
export class LaShareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
