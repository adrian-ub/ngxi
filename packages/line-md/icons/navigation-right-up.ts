import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdNavigationRightUpIcon],svg[line-md-navigation-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 15h9c2.76 0 5 -2.24 5 -5v-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 3l4 4M17 3l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdNavigationRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
