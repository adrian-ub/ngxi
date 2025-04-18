import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTruevisionsIcon],svg[arcticons-truevisions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.893 29.236V18.764l6.882 10.472V18.764m21.332 0L35.51 29.236l-2.597-10.472l-2.597 10.472l-2.597-10.472"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M27.31 24a4.567 4.567 0 1 1-9.135 0a4.567 4.567 0 0 1 9.134 0"></svg:path><svg:path d="m24.774 24l-1.77 1.022l-1.77 1.021v-4.086l1.77 1.021z"></svg:path></svg:g>`,
})
export class ArcticonsTruevisionsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
