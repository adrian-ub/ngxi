import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faGgIcon],svg[fa-gg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m672 576l384 384l-384 384L0 672L672 0l168 168l-96 96l-72-72l-480 480l480 480l193-193l-289-287zM1248 0l672 672l-672 672l-168-168l96-96l72 72l480-480l-480-480l-193 193l289 287l-96 96l-384-384z"></svg:path>`,
})
export class FaGgIcon {
  readonly viewBox = input("0 0 1920 1344")
  readonly width = input("1.43em")
  readonly height = input("1em")
}
