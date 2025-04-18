import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainMayaIcon],svg[devicon-plain-maya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M98 121h28V7l-37-.014l-24.374 58.376s2.3 5.781 4.227 11.71C71.8 86.145 75 97 75 97l-2 2h2c.4 0 .969-.255 2-2c4.073-7.553 44-82 44-82s-5.074 12.43-13.162 27.878C101.3 55.376 95 67 95 67v47zs.216-.659 1-3a397 397 0 0 0 14-40.928C120.125 51.452 124 29 124 29a317 317 0 0 1-9.273 49.009A220 220 0 0 1 99 118z"></svg:path><svg:path fill="currentColor" d="M75 99H54c-.4 0-.958-.218-2-2c-4.319-7.767-47-85-47-85s6.982 16.412 13.6 28.224a3266 3266 0 0 1 11.273 20.3a260 260 0 0 1-11.9 30.6C12.866 101.955 4 118 4 118a276 276 0 0 0 14.439-24.534C25.677 79.607 31 62 31 62l1 2v52c-6.3 7.77-30 5.727-30 5.727V7.435L38 4l37 93z"></svg:path>`,
})
export class DeviconPlainMayaIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
