import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiKeyboardHideIcon],svg[zmdi-keyboard-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 0q18 0 30.5 12.5T427 43v213q0 18-12.5 30.5T384 299H43q-18 0-30.5-12.5T0 256V43q0-18 12.5-30.5T43 0zM192 64v43h43V64zm0 64v43h43v-43zm-64-64v43h43V64zm0 64v43h43v-43zm-21 43v-43H64v43zm0-64V64H64v43zm192 149v-43H128v43zm0-85v-43h-43v43zm0-64V64h-43v43zm64 64v-43h-43v43zm0-64V64h-43v43zM213 427l-85-86h171z"></svg:path>`,
})
export class ZmdiKeyboardHideIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
