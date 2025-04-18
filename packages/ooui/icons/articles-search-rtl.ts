import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiArticlesSearchRtlIcon],svg[ooui-articles-search-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0a2 2 0 0 1 2 2H6a2 2 0 0 0-2 2v12a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></svg:path><svg:path fill="currentColor" d="M13.8 15.5a4.6 4.7 0 0 1-2.3.6a4.6 4.7 0 1 1 3.7-1.9l2.8 3V5a1.9 1.9 0 0 0-1.9-2H7a1.9 1.9 0 0 0-2 1.9V18a1.9 1.9 0 0 0 1.9 2H16a1.9 1.9 0 0 0 1.4-.6z"></svg:path><svg:circle cx="11.5" cy="11.5" r="3" fill="currentColor"></svg:circle>`,
})
export class OouiArticlesSearchRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
