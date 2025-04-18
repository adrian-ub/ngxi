import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoAlignHorizontalMiddleIcon],svg[entypo-align-horizontal-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10L5 7v2H1v2h4v2zm7 3v-2h4V9h-4V7l-3 3zm-5 5c.553 0 1-.049 1-.6V2.6c0-.553-.447-.6-1-.6s-1 .047-1 .6v14.8c0 .551.448.6 1 .6"></svg:path>`,
})
export class EntypoAlignHorizontalMiddleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
