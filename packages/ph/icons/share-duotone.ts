import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShareDuotoneIcon],svg[ph-share-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 104l-48 48V56Z" opacity=".2"></svg:path><svg:path d="m229.66 98.34l-48-48A8 8 0 0 0 168 56v40h-3a103.94 103.94 0 0 0-100.75 78a8 8 0 0 0 15.5 4A88 88 0 0 1 165 112h3v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 132.69V75.31L212.69 104ZM200 216a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v120h152a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhShareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
