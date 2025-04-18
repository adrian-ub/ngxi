import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoChevronThinUpIcon],svg[entypo-chevron-thin-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.582 13.891c-.272.268-.709.268-.979 0s-.271-.701 0-.969l7.908-7.83a.697.697 0 0 1 .979 0l7.908 7.83a.68.68 0 0 1 0 .969a.695.695 0 0 1-.978 0L10 6.75z"></svg:path>`,
})
export class EntypoChevronThinUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
