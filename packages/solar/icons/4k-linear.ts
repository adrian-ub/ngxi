import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solar4kLinearIcon],svg[solar-4k-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M5.5 8v2a2 2 0 0 0 2 2h3m0-4v4m0 0v4m3-8v5.2m0 0V16m0-2.8l1.923-2m0 0L18.5 8m-3.077 3.2L18.5 16"></svg:path></svg:g>`,
})
export class Solar4kLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
