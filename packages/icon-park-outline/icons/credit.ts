import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCreditIcon],svg[icon-park-outline-credit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 15V7H10v8m33 12V15H5v26h38"></svg:path><svg:path d="m29 27l-5 7h19M26 21h-4m-6 0h-4"></svg:path></svg:g>`,
})
export class IconParkOutlineCreditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
