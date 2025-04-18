import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDisplayFlexIcon],svg[gg-display-flex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 17V7h2v10zM16 7v10h2V7z"></svg:path><svg:path fill-rule="evenodd" d="M2 3h20v18H2zm2 2v14h16V5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgDisplayFlexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
