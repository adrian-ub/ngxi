import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoChevronSmallUpIcon],svg[entypo-chevron-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.582 12.141a.695.695 0 0 1-.978 0a.68.68 0 0 1 0-.969l3.908-3.83a.697.697 0 0 1 .979 0l3.908 3.83a.68.68 0 0 1 0 .969a.697.697 0 0 1-.979 0L10 9z"></svg:path>`,
})
export class EntypoChevronSmallUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
