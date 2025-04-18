import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiKeyboardIcon],svg[zmdi-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 43q18 0 30.5 12.5T427 85v214q0 17-12.5 29.5T384 341H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43zm-192 64v42h43v-42zm0 64v42h43v-42zm-64-64v42h43v-42zm0 64v42h43v-42zm-21 42v-42H64v42zm0-64v-42H64v42zm192 150v-43H128v43zm0-86v-42h-43v42zm0-64v-42h-43v42zm64 64v-42h-43v42zm0-64v-42h-43v42z"></svg:path>`,
})
export class ZmdiKeyboardIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
