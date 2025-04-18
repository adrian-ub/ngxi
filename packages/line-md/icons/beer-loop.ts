import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerLoopIcon],svg[line-md-beer-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerLoop0"><svg:path fill="none" stroke="#fff" stroke-width="2" d="M18 7c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2" opacity="0"><svg:animatemotion calcMode="linear" dur="3s" path="M0 0h10" repeatCount="indefinite"></svg:animatemotion><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.4s" values="0;1"></svg:animate></svg:path></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerLoop0)"></svg:path>`,
})
export class LineMdBeerLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
