import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlanet2BrokenIcon],svg[solar-planet-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray="3.5 2.5" d="M17.671 6.225c2.102-.415 3.654-.268 4.158.538c1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.516-.823.163-2.178 1.672-3.69"></svg:path><svg:path d="M8 5.07A8 8 0 1 1 5.07 8"></svg:path></svg:g>`,
})
export class SolarPlanet2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
