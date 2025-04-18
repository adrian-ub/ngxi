import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBeakeraltIcon],svg[whh-beakeralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 64h-32v832q0 53-37.5 90.5t-90.5 37.5h-576q-53 0-90.5-37.5t-37.5-90.5V192l-128-160q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-96 0h-776l72 96v32h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-96v64h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v64h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-96v64h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v64h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-96v64h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32q0 27 18.5 45.5t45.5 18.5h576q27 0 45.5-18.5t18.5-45.5z"></svg:path>`,
})
export class WhhBeakeraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
