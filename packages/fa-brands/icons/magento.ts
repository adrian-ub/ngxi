import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsMagentoIcon],svg[fa-brands-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M445.7 127.9V384l-63.4 36.5V164.7L223.8 73.1L65.2 164.7l.4 255.9L2.3 384V128.1L224.2 0zM255.6 420.5L224 438.9l-31.8-18.2v-256l-63.3 36.6l.1 255.9l94.9 54.9l95.1-54.9v-256l-63.4-36.6z"></svg:path>`,
})
export class FaBrandsMagentoIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
