import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconKeyboardFilledIcon],svg[lsicon-keyboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 3H1v10h14zM4 6H3V5h1zm3 0H6V5h1zm2 0h1V5H9zm4 0h-1V5h1zM4 7H3v1h1zm2 0h1v1H6zm4 0H9v1h1zm2 0h1v1h-1zm-9 4h10v-1H3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconKeyboardFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
