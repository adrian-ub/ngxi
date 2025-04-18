import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPoundOutlineIcon],svg[teenyicons-pound-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5 14.5l1.103-.367A2.775 2.775 0 0 0 3.5 11.5V4.442A3.94 3.94 0 0 1 7.442.5h.865C9.934.5 11.396 1.49 12 3M3 13h1.084a6 6 0 0 1 2.683.633l.05.025a6 6 0 0 0 5.366 0L13.5 13M1 7.5h8"></svg:path>`,
})
export class TeenyiconsPoundOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
