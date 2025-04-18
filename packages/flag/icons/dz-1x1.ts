import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagDz1x1Icon],svg[flag-dz-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M256 0h256v512H256z"></svg:path><svg:path fill="#006233" d="M0 0h256v512H0z"></svg:path><svg:path fill="#d21034" d="M367 192a128 128 0 1 0 0 128a102.4 102.4 0 1 1 0-128m4.2 64L256 218.4l71.7 98.2V195.4L256 293.6z"></svg:path>`,
})
export class FlagDz1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
