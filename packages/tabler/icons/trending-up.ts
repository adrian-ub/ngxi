import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingUpIcon],svg[tabler-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 17l6-6l4 4l8-8"></svg:path><svg:path d="M14 7h7v7"></svg:path></svg:g>`,
})
export class TablerTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
