import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowCloseUpIcon],svg[line-md-arrow-close-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3l18 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 21l0 -13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 7l7 7M12 7l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowCloseUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
