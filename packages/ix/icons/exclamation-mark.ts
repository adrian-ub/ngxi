import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixExclamationMarkIcon],svg[ix-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 297.173h42.666L277.312 128h-42.666zm48 54.827c-.356-15.116-11.382-26.675-26.608-26.675c-15.362 0-27.073 11.628-26.718 26.675c-.355 15.116 11.356 26.676 26.718 26.676c15.268 0 26.252-11.56 26.608-26.676" clip-rule="evenodd"></svg:path>`,
})
export class IxExclamationMarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
