import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainWebgpuIcon],svg[devicon-plain-webgpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.096 23.762l46.464 80.476L69.794 64l23.23-40.238zM69.793 64l23.232 40.238L116.255 64l11.65-20.12l-11.651-20.118l-11.613 20.117l-11.616-20.117z"></svg:path>`,
})
export class DeviconPlainWebgpuIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
