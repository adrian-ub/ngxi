import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoArrowBoldUpIcon],svg[entypo-arrow-bold-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 2.5l7.5 7.5H14v7H6v-7H2.5z"></svg:path>`,
})
export class EntypoArrowBoldUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
