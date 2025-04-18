import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFigmaIcon],svg[gg-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a3 3 0 0 0 0 6h7a3 3 0 1 0 0-6zm7 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-10 3a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3m3 4a3 3 0 1 0 3 3v-3z"></svg:path>`,
})
export class GgFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
