import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTornadoIcon],svg[ph-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 40a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h168a8 8 0 0 1 8 8m-48 32a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8m-16 32a8 8 0 0 0-8-8H56a8 8 0 0 0 0 16h104a8 8 0 0 0 8-8m16 32a8 8 0 0 0-8-8H88a8 8 0 0 0 0 16h88a8 8 0 0 0 8-8m0 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-24 32h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m-32 32h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhTornadoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
