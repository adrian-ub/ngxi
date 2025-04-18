import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitLaptopIcon],svg[uit-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 15H20V7a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v8H2.5a.5.5 0 0 0-.5.5V17a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-1.5a.5.5 0 0 0-.5-.5M5 7a2.003 2.003 0 0 1 2-2h10a2.003 2.003 0 0 1 2 2v8H5zm16 10a2.003 2.003 0 0 1-2 2H5a2.003 2.003 0 0 1-2-2v-1h18z"></svg:path>`,
})
export class UitLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
