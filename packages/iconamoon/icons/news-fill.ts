import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNewsFillIcon],svg[iconamoon-news-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 4v3h3a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1m2 14a1 1 0 1 1-2 0V9h2zM6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNewsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
