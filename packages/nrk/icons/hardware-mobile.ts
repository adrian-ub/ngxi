import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareMobileIcon],svg[nrk-hardware-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1h14v22H5zm2 20h10q-.003-9 0-18H7q.003 9 0 18m6.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path>`,
})
export class NrkHardwareMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
