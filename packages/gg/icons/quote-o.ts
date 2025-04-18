import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggQuoteOIcon],svg[gg-quote-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20 5H4v14h16zM4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M9.067 9.196h3l-2.134 5.608h-3zm5 0h3l-2.134 5.608h-3z"></svg:path></svg:g>`,
})
export class GgQuoteOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
