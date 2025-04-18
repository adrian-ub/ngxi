import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMoneyFillIcon],svg[ph-money-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 128a40 40 0 1 1-40-40a40 40 0 0 1 40 40m80-64v128a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h224a8 8 0 0 1 8 8m-16 46.35A56.78 56.78 0 0 1 193.65 72H62.35A56.78 56.78 0 0 1 24 110.35v35.3A56.78 56.78 0 0 1 62.35 184h131.3A56.78 56.78 0 0 1 232 145.65Z"></svg:path>`,
})
export class PhMoneyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
