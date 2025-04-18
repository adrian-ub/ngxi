import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconComputerExclamationFilledIcon],svg[lsicon-computer-exclamation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h5v2H5v1h6v-1H9.5v-2h5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm6 11v-2h1v2zm.354-4.428l3.5-3.5l-.707-.707L7.5 7.512L5.854 5.865l-.708.707l2 2a.5.5 0 0 0 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconComputerExclamationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
