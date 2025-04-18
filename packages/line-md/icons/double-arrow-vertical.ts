import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdDoubleArrowVerticalIcon],svg[line-md-double-arrow-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 12l0 -8.5M12 12l0 8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 3l-4 4M12 21l-4 -4M12 3l4 4M12 21l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDoubleArrowVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
