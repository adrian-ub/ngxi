import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPizzaIcon],svg[line-md-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="9" cy="7" r="0"><svg:animate fill="freeze" attributeName="r" begin="0.6s" dur="0.2s" values="0;2"></svg:animate></svg:circle><svg:circle cx="12" cy="13" r="0"><svg:animate fill="freeze" attributeName="r" begin="0.8s" dur="0.2s" values="0;2"></svg:animate></svg:circle></svg:g><svg:path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6.45c2.01 -2.12 4.85 -3.45 8 -3.45c3.15 0 5.99 1.33 8 3.45l-8 13.55Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdPizzaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
