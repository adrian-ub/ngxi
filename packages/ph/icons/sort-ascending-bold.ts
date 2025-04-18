import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSortAscendingBoldIcon],svg[ph-sort-ascending-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12M48 76h132a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24m52 104H48a12 12 0 0 0 0 24h52a12 12 0 0 0 0-24m132.49-20.49a12 12 0 0 0-17 0L196 179v-67a12 12 0 0 0-24 0v67l-19.51-19.52a12 12 0 0 0-17 17l40 40a12 12 0 0 0 17 0l40-40a12 12 0 0 0 0-16.97"></svg:path>`,
})
export class PhSortAscendingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
