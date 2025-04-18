import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTurnRightIcon],svg[line-md-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M8 19v-8c0 -0.55 0.45 -1 1 -1h11"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M20 10l-3 -3M20 10l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
