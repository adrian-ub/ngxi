import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconComputerAcrossFilledIcon],svg[lsicon-computer-across-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h5v2H5v1h6v-1H9.5v-2h5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm6 11v-2h1v2zm0-9v3h1V4zM8 7.745a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconComputerAcrossFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
