import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTwitterIcon],svg[gg-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a2 2 0 0 1 2 2v3h6a2 2 0 1 1 0 4h-6v2a3 3 0 0 0 3 3h3a2 2 0 1 1 0 4h-3a7 7 0 0 1-7-7V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class GgTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
