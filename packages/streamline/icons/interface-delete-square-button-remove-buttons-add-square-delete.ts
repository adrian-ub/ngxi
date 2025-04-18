import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteSquareButtonRemoveButtonsAddSquareDeleteIcon],svg[streamline-interface-delete-square-button-remove-buttons-add-square-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.12 4.88L4.88 9.12m0-4.24l4.24 4.24"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceDeleteSquareButtonRemoveButtonsAddSquareDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
