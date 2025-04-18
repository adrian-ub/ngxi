import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoinsYenIcon],svg[hugeicons-coins-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M3.157 11A7.111 7.111 0 0 0 13 20.843"></svg:path><svg:path d="M11.5 6.5c.167.713.9 2.333 2.5 3.111m0 0c1.6-.778 2.333-2.398 2.5-3.111M14 9.611V13.5m2.083-2.333h-4.166"></svg:path></svg:g>`,
})
export class HugeiconsCoinsYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
