import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMilkshakeIcon],svg[streamline-milkshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5V6a3.5 3.5 0 1 1 7 0v.5l-.434 6.071a1 1 0 0 1-.997.929H4.93a1 1 0 0 1-.997-.929zm-1 0h9M8.72 2.951L9.5.5M3.684 9h6.602"></svg:path>`,
})
export class StreamlineMilkshakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
