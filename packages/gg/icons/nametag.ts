import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggNametagIcon],svg[gg-nametag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 14v6h6v-2H6v-4z"></svg:path><svg:path fill-rule="evenodd" d="M9 9v6h6V9zm4 2h-2v2h2z" clip-rule="evenodd"></svg:path><svg:path d="M4 10V4h6v2H6v4zm16 0V4h-6v2h4v4zm0 4v6h-6v-2h4v-4z"></svg:path></svg:g>`,
})
export class GgNametagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
