import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsHorizontalIcon],svg[line-md-arrows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M15 7h-11.5M9 17h11.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M3 7l4 4M3 7l4 -4M21 17l-4 4M21 17l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
