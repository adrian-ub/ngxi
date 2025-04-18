import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTurnSlightRightIcon],svg[line-md-turn-slight-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M10 19v-7l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M17 5h-4M17 5v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTurnSlightRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
