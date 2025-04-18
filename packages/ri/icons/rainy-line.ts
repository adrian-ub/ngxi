import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRainyLineIcon],svg[ri-rainy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18v-2h1a4 4 0 1 0-2.157-7.37A6 6 0 1 0 8 15.917v2.022A8.001 8.001 0 0 1 9 2a8 8 0 0 1 6.98 4.087A6 6 0 1 1 17 18zm-5.768.732L12 16.965l1.768 1.767a2.5 2.5 0 1 1-3.536 0"></svg:path>`,
})
export class RiRainyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
