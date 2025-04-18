import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPizzaFilledIcon],svg[line-md-pizza-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPizzaFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M4 6.45c2.01 -2.12 4.85 -3.45 8 -3.45c3.15 0 5.99 1.33 8 3.45l-8 13.55Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:circle cx="9" cy="7" r="0" fill="#000" stroke="none"><svg:animate fill="freeze" attributeName="r" begin="0.6s" dur="0.2s" values="0;2"></svg:animate></svg:circle><svg:circle cx="12" cy="13" r="0" fill="#000" stroke="none"><svg:animate fill="freeze" attributeName="r" begin="0.8s" dur="0.2s" values="0;2"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPizzaFilled0)"></svg:rect>`,
})
export class LineMdPizzaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
