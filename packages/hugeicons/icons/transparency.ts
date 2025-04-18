import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransparencyIcon],svg[hugeicons-transparency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0"></svg:path><svg:path d="M8.026 15.607a7 7 0 0 1 7.821-7.556m3.15 1.202a7 7 0 1 1-9.744 9.744M6.5 2.5l9 9m-13-5l9 9"></svg:path></svg:g>`,
})
export class HugeiconsTransparencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
