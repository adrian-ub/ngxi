import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCommunicationFilledIcon],svg[ix-communication-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64h298.666v64h-192v208l-64 48v-85.333H42.667zm128 85.333h298.666V384h-42.666v85.333L312.889 384H170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCommunicationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
