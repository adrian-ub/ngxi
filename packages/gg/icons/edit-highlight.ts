import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditHighlightIcon],svg[gg-edit-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6a5.97 5.97 0 0 0-3.306.992H12v1H7.535a6 6 0 0 0-1.203 2.034H12v1H6.079a6 6 0 0 0 .003 1.966H12v1H6.339c.263.748.67 1.429 1.189 2.008H12v1H8.682A6 6 0 1 0 12 6"></svg:path><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10 8a8 8 0 1 1 0-16a8 8 0 0 1 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgEditHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
