import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdRssIcon],svg[line-md-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5" cy="19" r="0" fill="currentColor"><svg:animate fill="freeze" attributeName="r" dur="0.2s" values="0;2"></svg:animate></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M4 11c2.39 0 4.68 0.95 6.36 2.64c1.69 1.68 2.64 3.97 2.64 6.36"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.3s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M4 4c4.24 0 8.31 1.69 11.31 4.69c3 3 4.69 7.07 4.69 11.31"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
