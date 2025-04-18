import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSdCardMicroFilledIcon],svg[ix-sd-card-micro-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 64v120l-21.333 24v48H128v42.667L106.667 320v128H384V64zm74.667 42.667H160v64h42.667zm32 0h42.666v64h-42.666zm117.333 0h-42.667v64H352z" clip-rule="evenodd"></svg:path>`,
})
export class IxSdCardMicroFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
