import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDropIcon],svg[gg-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M6.343 19.52a8 8 0 0 1 0-11.313L12 2.55l5.657 5.657A8 8 0 0 1 6.343 19.521Z"></svg:path>`,
})
export class GgDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
