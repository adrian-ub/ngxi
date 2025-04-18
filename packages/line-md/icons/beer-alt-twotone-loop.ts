import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerAltTwotoneLoopIcon],svg[line-md-beer-alt-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerAltTwotoneLoop0"><svg:g><svg:g><svg:path fill="none" stroke="#fff" stroke-width="2" d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2"></svg:path><svg:path fill="#fff" fill-opacity=".3" d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z"></svg:path><svg:animatemotion calcMode="linear" dur="3s" path="M0 0h10" repeatCount="indefinite"></svg:animatemotion></svg:g><svg:animatemotion fill="freeze" begin="0.7s" calcMode="linear" dur="0.3s" path="M0 0v-16"></svg:animatemotion></svg:g></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerAltTwotoneLoop0)"></svg:path>`,
})
export class LineMdBeerAltTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
