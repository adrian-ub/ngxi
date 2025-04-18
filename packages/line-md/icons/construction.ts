import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdConstructionIcon],svg[line-md-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M21 21h-18v-2c0 -1 1 -2 2 -2h14c1 0 2 1 2 2v2Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M6 17l6 -15M18 17l-6 -15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" stroke-width="1" d="M8 12l4.5 -2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" stroke-width="1" d="M6 16l7.5 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" stroke-width="1" d="M9.5 17l5 -2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConstructionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
