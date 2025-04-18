import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareLogoFillIcon],svg[ph-square-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM168 96v64a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhSquareLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
