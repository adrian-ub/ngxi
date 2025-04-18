import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBorderRightIcon],svg[gg-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".3" d="M8 16V8h7V5H5v14h10v-3z"></svg:path><svg:path d="M17 19V5h3v14z"></svg:path></svg:g>`,
})
export class GgBorderRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
