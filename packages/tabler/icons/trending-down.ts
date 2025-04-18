import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingDownIcon],svg[tabler-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 7l6 6l4-4l8 8"></svg:path><svg:path d="M21 10v7h-7"></svg:path></svg:g>`,
})
export class TablerTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
