import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSearchVisualIcon],svg[streamline-search-visual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5v2a1 1 0 0 1-1 1h-2m0-13h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m0 13h-2a1 1 0 0 1-1-1v-2"></svg:path><svg:path d="M3.25 6.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8.5 8.5l2 2"></svg:path></svg:g>`,
})
export class StreamlineSearchVisualIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
