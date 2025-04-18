import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSendToBackIcon],svg[ix-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.333 298.667V448H64V298.667zm-42.666 42.666h-64v64h64zM277.333 128v106.667H384V384H234.667V277.333H128V128zM448 64v149.333H298.667V64zm-42.667 42.667h-64v64h64z"></svg:path>`,
})
export class IxSendToBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
