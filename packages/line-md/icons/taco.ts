import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdTacoIcon],svg[line-md-taco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M5 17h16"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M19 17c1.5 0 3 -1.5 3 -3c0 -4.5 -4 -7 -7 -7c-4 0 -7 3 -7 7c0 1.78 -1.5 3 -3 3c-1.5 0 -3 -1 -3 -3c0 -5 5 -8.5 10 -6.38"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="56;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdTacoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
