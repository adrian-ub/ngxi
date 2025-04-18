import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconManagementFilledIcon],svg[lsicon-management-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 1a.5.5 0 0 0-.485.621L5.11 2H3.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.61l.095-.379A.5.5 0 0 0 10.5 1zm.64 1h3.72l-.25 1H6.39zM8.5 6.5V7H5v1h3.5v.5h1V8H11V7H9.5v-.5zm-2 3v.5H5v1h1.5v.5h1V11H11v-1H7.5v-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconManagementFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
