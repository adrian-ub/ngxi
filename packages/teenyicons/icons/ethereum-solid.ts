import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEthereumSolidIcon],svg[teenyicons-ethereum-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 0a.5.5 0 0 1 .384.18l5 6a.5.5 0 0 1 .04.585l-5 8a.5.5 0 0 1-.848 0l-5-8a.5.5 0 0 1 .04-.585l5-6A.5.5 0 0 1 7.5 0M3.241 6.742L7.5 5.04l4.259 1.703L7.5 13.557zm7.61-1.44L7.5 3.962l-3.35 1.34L7.5 1.28z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsEthereumSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
