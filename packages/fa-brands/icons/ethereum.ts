import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsEthereumIcon],svg[fa-brands-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M311.9 260.8L160 353.6L8 260.8L160 0zM160 383.4L8 290.6L160 512l152-221.4z"></svg:path>`,
})
export class FaBrandsEthereumIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
