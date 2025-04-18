import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherRotateCcwIcon],svg[feather-rotate-ccw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M1 4v6h6"></svg:path><svg:path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></svg:path></svg:g>`,
})
export class FeatherRotateCcwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
