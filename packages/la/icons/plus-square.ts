import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPlusSquareIcon],svg[la-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8 4v4h-4v2h4v4h2v-4h4v-2h-4v-4z"></svg:path>`,
})
export class LaPlusSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
