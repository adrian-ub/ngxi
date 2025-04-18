import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStackOverflowLogoFillIcon],svg[ph-stack-overflow-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-73.14 14.86a8 8 0 0 1 11.32 0l45.25 45.26a8 8 0 0 1-11.31 11.31l-45.26-45.25a8 8 0 0 1 0-11.32m-34.68 51.91a8 8 0 0 1 10.45-4.33l59.13 24.49a8 8 0 0 1-3.06 15.4a7.9 7.9 0 0 1-3.06-.62l-59.13-24.49a8 8 0 0 1-4.33-10.45M96 152h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16m104 40a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v40h112v-40a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhStackOverflowLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
