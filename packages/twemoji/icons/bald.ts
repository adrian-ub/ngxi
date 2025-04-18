import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBaldIcon],svg[twemoji-bald-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFDC5D" d="M34.896 36C30.618 13.677 16.169 2.725 0 1.195V36h34.896z"></svg:path>`,
})
export class TwemojiBaldIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
