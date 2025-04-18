import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCrockeryIcon],svg[uil-crockery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12.15V3a1 1 0 0 0-2 0v9.15a4.16 4.16 0 0 0-3 4c0 2.05 1.52 5.8 4 5.8s4-3.75 4-5.8a4.16 4.16 0 0 0-3-4M17 20c-.8 0-2-2.27-2-3.8a2.11 2.11 0 0 1 2-2.2a2.11 2.11 0 0 1 2 2.2c0 1.53-1.2 3.8-2 3.8M10 2a1 1 0 0 0-1 1v5.46l-1 .67V3a1 1 0 0 0-2 0v6.13l-1-.67V3a1 1 0 0 0-2 0v6a1 1 0 0 0 .45.83L6 11.54V21a1 1 0 0 0 2 0v-9.46l2.55-1.71A1 1 0 0 0 11 9V3a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilCrockeryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
