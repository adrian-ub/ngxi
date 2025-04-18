import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsLongDiagonalIcon],svg[line-md-arrows-long-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M12 12l-8.5 8.5M12 12l8.5 -8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M21 3h-8M3 21v-8M21 3v8M3 21h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsLongDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
