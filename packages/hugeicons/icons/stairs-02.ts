import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStairs02Icon],svg[hugeicons-stairs-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 15H3.5c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541C2 15.801 2 16.034 2 16.5s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077H10zm3-3H7c-.943 0-1.414 0-1.707.293S5 13.057 5 14v1h8z"></svg:path><svg:path d="M10 18h8c1.886 0 2.828 0 3.414-.586S22 15.886 22 14V8c0-.943 0-1.414-.293-1.707S20.943 6 20 6h-1"></svg:path><svg:path d="M16 9h-6c-.943 0-1.414 0-1.707.293S8 10.057 8 11v1h8zm3-3h-6c-.943 0-1.414 0-1.707.293S11 7.057 11 8v1h8z"></svg:path></svg:g>`,
})
export class HugeiconsStairs02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
