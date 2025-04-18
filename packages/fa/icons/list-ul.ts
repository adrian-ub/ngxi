import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faListUlIcon],svg[fa-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1216q0 80-56 136t-136 56t-136-56t-56-136t56-136t136-56t136 56t56 136m0-512q0 80-56 136t-136 56t-136-56T0 704t56-136t136-56t136 56t56 136m1408 416v192q0 13-9.5 22.5t-22.5 9.5H544q-13 0-22.5-9.5T512 1312v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5M384 192q0 80-56 136t-136 56t-136-56T0 192T56 56T192 0t136 56t56 136m1408 416v192q0 13-9.5 22.5T1760 832H544q-13 0-22.5-9.5T512 800V608q0-13 9.5-22.5T544 576h1216q13 0 22.5 9.5t9.5 22.5m0-512v192q0 13-9.5 22.5T1760 320H544q-13 0-22.5-9.5T512 288V96q0-13 9.5-22.5T544 64h1216q13 0 22.5 9.5T1792 96"></svg:path>`,
})
export class FaListUlIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}
