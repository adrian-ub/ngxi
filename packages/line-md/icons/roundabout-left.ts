import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdRoundaboutLeftIcon],svg[line-md-roundabout-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M16 20v-5c0 -0.55 0.45 -0.99 0.99 -1.1c2.29 -0.46 4.01 -2.48 4.01 -4.9c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4.01c-0.11 0.54 -0.55 0.99 -1.1 0.99h-7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M3 9l3 -3M3 9l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdRoundaboutLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
