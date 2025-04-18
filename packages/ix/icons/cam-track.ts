import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCamTrackIcon],svg[ix-cam-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 341.334H192v-128h-42.667v128H42.667v-42.667h64v-128h128v128h42.666v-128h128v128h64v42.667H362.667v-128H320z" clip-rule="evenodd"></svg:path>`,
})
export class IxCamTrackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
