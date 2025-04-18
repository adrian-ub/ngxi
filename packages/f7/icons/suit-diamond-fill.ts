import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SuitDiamondFillIcon],svg[f7-suit-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.988 52c1.29 0 1.946-.867 3.258-2.648l13.992-18.68c.633-.867 1.008-1.735 1.008-2.672c0-.961-.375-1.805-1.008-2.672L31.246 6.625C29.934 4.867 29.277 4 27.988 4c-1.265 0-1.922.867-3.234 2.625L10.762 25.328c-.633.867-1.008 1.711-1.008 2.672c0 .938.375 1.805 1.008 2.672l13.992 18.68C26.066 51.132 26.723 52 27.988 52"></svg:path>`,
})
export class F7SuitDiamondFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
