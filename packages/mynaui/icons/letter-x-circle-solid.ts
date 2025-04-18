import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXCircleSolidIcon],svg[mynaui-letter-x-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.6 7.55a.75.75 0 1 0-1.2.9L11.062 12L8.4 15.55a.75.75 0 0 0 1.2.9l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.2-.9L12.938 12L15.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterXCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
