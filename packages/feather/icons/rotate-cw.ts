import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherRotateCwIcon],svg[feather-rotate-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M23 4v6h-6"></svg:path><svg:path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></svg:path></svg:g>`,
})
export class FeatherRotateCwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
