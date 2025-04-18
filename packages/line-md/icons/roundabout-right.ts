import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdRoundaboutRightIcon],svg[line-md-roundabout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M8 20v-5c0 -0.55 -0.45 -0.99 -0.99 -1.1c-2.29 -0.46 -4.01 -2.48 -4.01 -4.9c0 -2.76 2.24 -5 5 -5c2.42 0 4.44 1.72 4.9 4.01c0.11 0.54 0.55 0.99 1.1 0.99h7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M21 9l-3 -3M21 9l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdRoundaboutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
