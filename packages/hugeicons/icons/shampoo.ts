import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShampooIcon],svg[hugeicons-shampoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 13a5 5 0 0 1 10 0v5c0 1.886 0 2.828-.586 3.414S14.886 22 13 22h-2c-1.886 0-2.828 0-3.414-.586S7 19.886 7 18z"></svg:path><svg:path d="M10 8V7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v1m-2-3V2m0 0h-2m2 0h2.745a3 3 0 0 1 2.041.802L17 3M7 13h10"></svg:path></svg:g>`,
})
export class HugeiconsShampooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
