import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareLogoDuotoneIcon],svg[ph-square-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 96v64H96V96Z" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM160 88H96a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-8 64h-48v-48h48Z"></svg:path></svg:g>`,
})
export class PhSquareLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
