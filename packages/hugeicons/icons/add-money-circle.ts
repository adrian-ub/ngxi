import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAddMoneyCircleIcon],svg[hugeicons-add-money-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 9.5h1.5A1.5 1.5 0 0 1 14 11m-3-1.5H9.5A1.5 1.5 0 0 0 8 11v.5A1.5 1.5 0 0 0 9.5 13h3a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H11m0-7V8m0 8.5H9.5A1.5 1.5 0 0 1 8 15m3 1.5V18"></svg:path><svg:path d="M12 4.055A9 9 0 1 0 19.945 12M18.5 2v7M22 5.5h-7"></svg:path></svg:g>`,
})
export class HugeiconsAddMoneyCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
