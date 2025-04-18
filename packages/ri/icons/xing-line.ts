import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riXingLineIcon],svg[ri-xing-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.444 3.5L13.81 14.99L17.857 22h-2.31l-4.045-7.009H11.5L18.134 3.5zM8.31 7l2.422 4.196l-.002.001L7.67 16.5H5.36l3.061-5.305L6.002 7z"></svg:path>`,
})
export class RiXingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
