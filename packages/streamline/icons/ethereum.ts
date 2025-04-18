import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEthereumIcon],svg[streamline-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.17.573l4.738 6.432l-4.737 6.432l-4.738-6.432z"></svg:path><svg:path d="M11.908 7.005L7.17 8.578L2.433 7.005"></svg:path></svg:g>`,
})
export class StreamlineEthereumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
