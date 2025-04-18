import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGasPipeIcon],svg[hugeicons-gas-pipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 17.5h6m0 3H2m14-3h6m0 3h-6M13.5 12h-3v4h3z"></svg:path><svg:path d="M17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0m-5 0l1.5-1.5M14 16h-4c-.943 0-1.414 0-1.707.293S8 17.057 8 18v2c0 .943 0 1.414.293 1.707S9.057 22 10 22h4c.943 0 1.414 0 1.707-.293S16 20.943 16 20v-2c0-.943 0-1.414-.293-1.707S14.943 16 14 16"></svg:path></svg:g>`,
})
export class HugeiconsGasPipeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
