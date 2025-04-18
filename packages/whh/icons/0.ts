import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whh0Icon],svg[whh-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v512q0 106-75 181t-181 75M256 896h256q31 0 61-16L128 267v501q0 53 37.5 90.5T256 896m256-768H256q-32 0-61 16l445 613V256q0-53-37.5-90.5T512 128"></svg:path>`,
})
export class Whh0Icon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
