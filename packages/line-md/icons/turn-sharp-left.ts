import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTurnSharpLeftIcon],svg[line-md-turn-sharp-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M17 20v-5c0 -0.55 -0.45 -1 -1 -1h-8c-0.55 0 -1 -0.45 -1 -1v-9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M7 4l-3 3M7 4l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTurnSharpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
