import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberSquareFourBoldIcon],svg[ph-number-square-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM88 164h44v12a12 12 0 0 0 24 0v-12h4a12 12 0 0 0 0-24h-4V80a12 12 0 0 0-21.47-7.37l-56 72A12 12 0 0 0 88 164m44-49v25h-19.46Z"></svg:path>`,
})
export class PhNumberSquareFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
