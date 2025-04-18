import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronTripleRightIcon],svg[line-md-chevron-triple-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 12l-7 -7M22 12l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M16 12l-7 -7M16 12l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M10 12l-7 -7M10 12l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronTripleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
