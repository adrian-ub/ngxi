import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDistributeHorizontalIcon],svg[gg-distribute-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-opacity=".5" stroke-width="2" d="M11 9h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M5 5v14h2V5zm12 0v14h2V5z"></svg:path></svg:g>`,
})
export class GgDistributeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
