import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsExpandDownRightIcon],svg[gg-arrows-expand-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM9 5H5v4h4z" clip-rule="evenodd"></svg:path><svg:path d="M19 13h2v8h-8v-2h4.586l-5.364-5.364a1 1 0 0 1 1.414-1.414L19 17.586z"></svg:path></svg:g>`,
})
export class GgArrowsExpandDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
