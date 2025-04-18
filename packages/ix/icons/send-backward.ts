import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSendBackwardIcon],svg[ix-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 192v234.666H85.333V192zm-42.667 42.666H128V384h149.333zM426.667 85.333v256h-85.334V170.666H170.667V85.333z"></svg:path>`,
})
export class IxSendBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
