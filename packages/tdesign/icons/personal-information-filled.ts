import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPersonalInformationFilledIcon],svg[tdesign-personal-information-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.91 1H3v22h18V7.09zm.09 9.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M6 19a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1H6z"></svg:path>`,
})
export class TdesignPersonalInformationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
