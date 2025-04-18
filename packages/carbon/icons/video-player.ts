import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVideoPlayerIcon],svg[carbon-video-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11v10l8-5z"></svg:path><svg:path fill="currentColor" d="M28 6H4c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h24c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2m0 18H4V8h24z"></svg:path>`,
})
export class CarbonVideoPlayerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
