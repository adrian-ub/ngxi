import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconEthereumIcon],svg[picon-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.5L4 6l3-1.5L4 8M1 4l3-4l3 4l-3 1.5"></svg:path>`,
})
export class PiconEthereumIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
