import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconKeyboardOutlineIcon],svg[lsicon-keyboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 10.5h10m-10-5h1m2 0h1m2 0h1m2 0h1m0 2h-1m-2 0H9m-2 0H6m-2 0H3m-1.5-4h13v9h-13z"></svg:path>`,
})
export class LsiconKeyboardOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
