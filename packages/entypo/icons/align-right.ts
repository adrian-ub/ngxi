import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoAlignRightIcon],svg[entypo-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7v2H3v2h8v2l3-3zm4-4.4v14.8c0 .551.448.6 1 .6c.553 0 1-.049 1-.6V2.6c0-.553-.447-.6-1-.6s-1 .047-1 .6"></svg:path>`,
})
export class EntypoAlignRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
