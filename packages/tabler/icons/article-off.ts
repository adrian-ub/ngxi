import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArticleOffIcon],svg[tabler-article-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h11a2 2 0 0 1 2 2v11m-1.172 2.821A2 2 0 0 1 19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 1.156-1.814M7 8h1m4 0h5M7 12h5m4 0h1M7 16h9M3 3l18 18"></svg:path>`,
})
export class TablerArticleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
