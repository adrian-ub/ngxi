import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faOperaIcon],svg[fa-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1493 228q-165-110-359-110q-155 0-293 73T601 391q-75 93-119.5 218T433 875v42q4 141 48.5 266T601 1401q102 127 240 200t293 73q194 0 359-110q-121 108-274.5 168T896 1792q-29 0-43-1q-175-8-333-82t-272-193t-181-281T0 896q0-182 71-348t191-286T548 71T896 0h3q168 1 320.5 60.5T1493 228m299 668q0 192-77 362.5T1502 1555q-104 63-222 63q-137 0-255-84q154-56 253.5-233t99.5-405q0-227-99-404t-253-234q119-83 254-83q119 0 226 65q135 125 210.5 295t75.5 361"></svg:path>`,
})
export class FaOperaIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
