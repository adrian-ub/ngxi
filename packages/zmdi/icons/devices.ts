import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDevicesIcon],svg[zmdi-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 64v235h214v64H0v-64h43V64q0-18 12.5-30.5T85 21h384v43zm406 43q8 0 14.5 6t6.5 15v213q0 9-6.5 15.5T491 363H363q-9 0-15.5-6.5T341 341V128q0-9 6.5-15t15.5-6zm-22 192V149h-85v150z"></svg:path>`,
})
export class ZmdiDevicesIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
