import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDuplicateIcon],svg[gg-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 5H7V3h14v14h-2zM9 13v-2h2v2h2v2h-2v2H9v-2H7v-2z"></svg:path><svg:path fill-rule="evenodd" d="M3 7h14v14H3zm2 2h10v10H5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
