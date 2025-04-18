import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTornadoThinIcon],svg[ph-tornado-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 40a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h168a4 4 0 0 1 4 4m-48 32a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h144a4 4 0 0 0 4-4m-16 32a4 4 0 0 0-4-4H56a4 4 0 0 0 0 8h104a4 4 0 0 0 4-4m16 32a4 4 0 0 0-4-4H88a4 4 0 0 0 0 8h88a4 4 0 0 0 4-4m4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-24 32h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m-32 32h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTornadoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
