import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEthereumCircleIcon],svg[streamline-ethereum-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M7 3L4.5 6L7 8l2.5-2zM4.5 9L7 11l2.5-2"></svg:path></svg:g>`,
})
export class StreamlineEthereumCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
