import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRainyFillIcon],svg[ri-rainy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.86 18l-3.153-3.153a1 1 0 0 0-1.414 0L8.18 17.96a8.001 8.001 0 1 1 7.8-11.873A6 6 0 1 1 17 18zm-5.628.732L12 16.965l1.768 1.767a2.5 2.5 0 1 1-3.536 0"></svg:path>`,
})
export class RiRainyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
