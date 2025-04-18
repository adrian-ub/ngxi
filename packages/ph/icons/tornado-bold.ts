import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTornadoBoldIcon],svg[ph-tornado-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 44a12 12 0 0 1-12 12H60a12 12 0 0 1 0-24h160a12 12 0 0 1 12 12m-56 44a12 12 0 0 0-12-12H44a12 12 0 0 0 0 24h120a12 12 0 0 0 12-12m0 44a12 12 0 0 0-12-12H76a12 12 0 0 0 0 24h88a12 12 0 0 0 12-12m-4 32h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m-32 44h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTornadoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
