import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEthereumIcon],svg[logos-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#343434" d="m127.961 0l-2.795 9.5v275.668l2.795 2.79l127.962-75.638z"></svg:path><svg:path fill="#8C8C8C" d="M127.962 0L0 212.32l127.962 75.639V154.158z"></svg:path><svg:path fill="#3C3C3B" d="m127.961 312.187l-1.575 1.92v98.199l1.575 4.601l128.038-180.32z"></svg:path><svg:path fill="#8C8C8C" d="M127.962 416.905v-104.72L0 236.585z"></svg:path><svg:path fill="#141414" d="m127.961 287.958l127.96-75.637l-127.96-58.162z"></svg:path><svg:path fill="#393939" d="m.001 212.321l127.96 75.637V154.159z"></svg:path>`,
})
export class LogosEthereumIcon {
  readonly viewBox = input("0 0 256 417")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
