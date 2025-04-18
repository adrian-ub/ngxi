import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNoteitIcon],svg[arcticons-noteit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h22.835V32.335H42.5V9.5c0-2.2-1.8-4-4-4m4 26.835L32.335 42.5M5.5 11.809h37"></svg:path><svg:path d="m24 19.258l-1.256-1.256a4.25 4.25 0 0 0-5.988 0h0a4.25 4.25 0 0 0 0 5.988l1.256 1.256m11.976 0l1.256-1.256a4.25 4.25 0 0 0 0-5.988h0a4.25 4.25 0 0 0-5.988 0L24 19.258m-5.988 5.988L24 31.235l5.988-5.989"></svg:path></svg:g>`,
})
export class ArcticonsNoteitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
