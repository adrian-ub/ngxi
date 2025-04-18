import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdDoubleArrowHorizontalIcon],svg[line-md-double-arrow-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 12h-8.5M12 12h8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M3 12l4 4M21 12l-4 4M3 12l4 -4M21 12l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDoubleArrowHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
