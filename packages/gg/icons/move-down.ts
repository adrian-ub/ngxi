import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMoveDownIcon],svg[gg-move-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 5h2v8H7zm8 0h2v8h-2z"></svg:path><svg:path d="M11 5h2v10h3.035l-4 4.071l-4-4.071H11z"></svg:path></svg:g>`,
})
export class GgMoveDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
