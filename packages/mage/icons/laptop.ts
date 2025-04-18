import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLaptopIcon],svg[mage-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.75 16.163V6.212a1.106 1.106 0 0 0-1.105-1.106H5.377a1.106 1.106 0 0 0-1.105 1.106v9.95m-1.772.001h19v1.365c0 .363-.167.71-.464.966s-.7.4-1.12.4H4.084a1.72 1.72 0 0 1-1.12-.4a1.28 1.28 0 0 1-.463-.966z"></svg:path>`,
})
export class MageLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
