import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilExclamationOctagonIcon],svg[uil-exclamation-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1m9.71-7.44l-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46a1.05 1.05 0 0 0 .29.71l5.27 5.27a1.05 1.05 0 0 0 .71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71M20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69Z"></svg:path>`,
})
export class UilExclamationOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
