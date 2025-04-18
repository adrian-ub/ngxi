import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowUpLeftIcon],svg[f7-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.98 36.215c0 1.242.961 2.156 2.086 2.156s2.063-.984 2.063-2.062v-7.477l-.422-10.664l3.75 4.242L40.41 43.387c.446.422.938.633 1.453.633c1.149 0 2.157-1.055 2.157-2.157c0-.492-.235-1.008-.657-1.43L22.41 19.458l-4.242-3.75l11.156.422h6.985c1.078 0 2.039-.938 2.039-2.04c0-1.1-.844-2.062-2.133-2.062l-22.008-.046c-1.383 0-2.227.89-2.227 2.226Z"></svg:path>`,
})
export class F7ArrowUpLeftIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
