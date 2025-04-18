import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWindyRainIcon],svg[tdesign-windy-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5a1 1 0 1 0 0 2h5v2h-5a3 3 0 1 1 0-6h4v2zM5.5 8a1.5 1.5 0 1 0 0 3H12v2H5.5a3.5 3.5 0 1 1 0-7H8v2zM20 6.996h2.004V9H20zm0 4h2.004V13H20zM14 11h4v2h-4zm2 3.996h2.004V17H16zM5 18a3 3 0 0 1 3-3h1v2H8a1 1 0 1 0 0 2h4.5v2H8a3 3 0 0 1-3-3m6-3h3v2h-3z"></svg:path>`,
})
export class TdesignWindyRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
