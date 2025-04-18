import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandUpLeftIcon],svg[gg-arrows-expand-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 11H3V3h8v2H6.414l5.364 5.364a1 1 0 0 1-1.414 1.414L5 6.414z"></svg:path><svg:path fill-rule="evenodd" d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm0 2v4h-4v-4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowsExpandUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
