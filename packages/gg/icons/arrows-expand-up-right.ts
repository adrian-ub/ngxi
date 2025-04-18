import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandUpRightIcon],svg[gg-arrows-expand-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5V3h8v8h-2V6.414l-5.364 5.364a1 1 0 0 1-1.414-1.414L17.586 5z"></svg:path><svg:path fill-rule="evenodd" d="M5 13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 2v4h4v-4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgArrowsExpandUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
