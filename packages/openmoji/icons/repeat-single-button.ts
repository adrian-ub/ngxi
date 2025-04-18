import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRepeatSingleButtonIcon],svg[openmoji-repeat-single-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M10.575 43.203A17.4 17.4 0 0 1 10 38.757V37.65c0-9.464 7.575-17.135 16.92-17.135h30.908m2.666 5.464A17.4 17.4 0 0 1 62 33.082v1.114c0 9.515-7.602 17.229-16.98 17.229h-16.4m29.208-30.911L49.643 12.3m0 16.427l8.185-8.213M16.647 46.472l2.979-2.231v10.76"></svg:path>`,
})
export class OpenmojiRepeatSingleButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
