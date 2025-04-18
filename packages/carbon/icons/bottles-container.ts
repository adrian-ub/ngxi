import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBottlesContainerIcon],svg[carbon-bottles-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10V8a1 1 0 0 0-1-1h-3v2h2v1.969s2 1.124 2 3.48V23h-4v2h5a1 1 0 0 0 1-1v-9.55A5.93 5.93 0 0 0 23 10m-8 0V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2a5.93 5.93 0 0 0-2 4.449V24a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9.551A5.93 5.93 0 0 0 15 10m0 13H9v-8.551c0-2.356 2-3.48 2-3.48v-1.97h2v1.97s2 1.124 2 3.48z"></svg:path><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 26H4V4h24z"></svg:path>`,
})
export class CarbonBottlesContainerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
