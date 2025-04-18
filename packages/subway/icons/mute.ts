import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMuteIcon],svg[subway-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m159.8 320l64-64l-64-64l85.3-85.3l64 64V0L159.8 149.3H74.4v213.3h85.3L309.1 512V341.3l-64 64zm245.3-128l-32-32l-64 64l-64-64l-32 32l64 64l-64 64l32 32l64-64l64 64l32-32l-64-64z"></svg:path>`,
})
export class SubwayMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
