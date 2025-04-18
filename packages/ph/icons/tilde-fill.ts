import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTildeFillIcon],svg[ph-tilde-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-10 99.66c-13.19 15-25.34 20.29-36.37 20.29c-14.94 0-27.81-9.61-38.43-17.54c-19.2-14.34-31.89-23.81-53.2.48a8 8 0 1 1-12-10.55c31.05-35.41 56.34-16.53 74.8-2.75c19.2 14.34 31.89 23.81 53.2-.48a8 8 0 1 1 12 10.55"></svg:path>`,
})
export class PhTildeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
