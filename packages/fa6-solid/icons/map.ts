import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidMapIcon],svg[fa6-solid-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m384 476.1l-192-54.9V35.9l192 54.9zm32-1.2V88.4l127.1-50.9c15.8-6.3 32.9 5.3 32.9 22.3v334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2v386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3"></svg:path>`,
})
export class Fa6SolidMapIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
