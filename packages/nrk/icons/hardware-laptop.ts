import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareLaptopIcon],svg[nrk-hardware-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 16h2L4.995 6h14.01L19 16h2l.005-12H2.995zm-2 2h9v1h4v-1h9v3H1z" clip-rule="evenodd"></svg:path>`,
})
export class NrkHardwareLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
