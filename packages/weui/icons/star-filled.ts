import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiStarFilledIcon],svg[weui-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 18.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202l-3.78-3.685a1 1 0 0 1 .555-1.706l5.223-.759l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733l5.223.76a1 1 0 0 1 .555 1.705L17.23 14.7l.892 5.202a1 1 0 0 1-1.45 1.054z"></svg:path>`,
})
export class WeuiStarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
