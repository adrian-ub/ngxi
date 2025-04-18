import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifWsIcon],svg[cif-ws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CE1126" d="M.5.5h300v150H.5z"></svg:path><svg:path fill="#002B7F" d="M.5.5h150v75H.5z"></svg:path><svg:path fill="#FFF" d="m75.5 52.561l6.438 19.814l-16.855-12.246h20.834L69.062 72.375zM52.584 22.375L57.734 38L44.25 28.343h16.667L47.433 38zm46.354-3.125l4.828 14.583l-12.641-9.013h15.625l-12.641 9.013zM75.5 3.625l5.151 15.625l-13.484-9.657h16.667L70.35 19.25zM86.959 38.51l3.218 9.906l-8.427-6.122h10.417l-8.427 6.122z"></svg:path></svg:g>`,
})
export class CifWsIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
