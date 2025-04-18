import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOvenIcon],svg[hugeicons-oven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 5h4m8 .009V5M3 8h18M2 22h20M3 22V5c0-2.482.518-3 3-3h12c2.482 0 3 .518 3 3v17"></svg:path><svg:path d="M6 17v-4c0-.943 0-1.414.293-1.707S7.057 11 8 11h8c.943 0 1.414 0 1.707.293S18 12.057 18 13v4c0 .943 0 1.414-.293 1.707S16.943 19 16 19H8c-.943 0-1.414 0-1.707-.293S6 17.943 6 17"></svg:path></svg:g>`,
})
export class HugeiconsOvenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
