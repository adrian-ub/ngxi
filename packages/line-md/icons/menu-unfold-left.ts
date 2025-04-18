import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMenuUnfoldLeftIcon],svg[line-md-menu-unfold-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M21 9l-3 3l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5h-14"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M14 12h-9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19h-14"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdMenuUnfoldLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
