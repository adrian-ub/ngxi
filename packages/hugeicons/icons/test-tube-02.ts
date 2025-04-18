import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTestTube02Icon],svg[hugeicons-test-tube-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 2v16a4 4 0 0 1-8 0V2"></svg:path><svg:path d="M8 8.556c.889-1.153 2.31-.322 4 .762c2.222 1.426 3.556.332 4-.703M7 2h10m-6 16.002l.009-.002M13 14.002l.009-.002"></svg:path></svg:g>`,
})
export class HugeiconsTestTube02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
