import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeClearFormattingIcon],svg[icomoon-free-clear-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14h9v2H0zM14 2H9.273L6.402 13H4.335L7.206 2H3.001V0h11zm.528 14L12.5 13.972L10.472 16l-.972-.972L11.528 13L9.5 10.972l.972-.972l2.028 2.028L14.528 10l.972.972L13.472 13l2.028 2.028z"></svg:path>`,
})
export class IcomoonFreeClearFormattingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
