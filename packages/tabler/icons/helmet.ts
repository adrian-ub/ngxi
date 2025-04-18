import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHelmetIcon],svg[tabler-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 4a9 9 0 0 1 5.656 16H6.344A9 9 0 0 1 12 4"></svg:path><svg:path d="M20 9h-8.8a1 1 0 0 0-.968 1.246q.76 3 3.268 4.254q3 1.5 7 1.5"></svg:path></svg:g>`,
})
export class TablerHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
