import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoBlackSmallSquareIcon],svg[noto-black-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#575757" d="M50.66 48.05h26c1.6 0 2.9 1.3 2.9 2.9v26c0 1.6-1.3 2.9-2.9 2.9h-26c-1.6 0-2.9-1.3-2.9-2.9v-25.9a2.863 2.863 0 0 1 2.72-3z"></svg:path><svg:path fill="#424242" d="M50.66 48.05h21.4c1.6 0 2.9 1.3 2.9 2.9v21.4c0 1.6-1.3 2.9-2.9 2.9h-21.4c-1.6 0-2.9-1.3-2.9-2.9v-21.3a2.863 2.863 0 0 1 2.72-3z"></svg:path><svg:path fill="#787878" d="M56.86 51.05c0-.6-.4-.8-2.9-.7c-2.1.1-3.1.3-3.7 1.1s-.8 2.3-.8 4.2c0 1.3 0 2.5.7 2.5c.9 0 .9-2.1 1.7-3.3c1.4-2.4 5-3 5-3.8"></svg:path>`,
})
export class NotoBlackSmallSquareIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
