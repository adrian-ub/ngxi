import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceRemoveSquareSubtractButtonsRemoveAddButtonSquareDeleteIcon],svg[streamline-interface-remove-square-subtract-buttons-remove-add-button-square-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 7h6"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceRemoveSquareSubtractButtonsRemoveAddButtonSquareDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
