import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDirectionsRailwayIcon],svg[material-symbols-directions-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-1l1.5-1q-1.475 0-2.488-1.012T4 15.5V6q0-2.075 1.925-3.037T12 2q4.3 0 6.15.925T20 6v9.5q0 1.475-1.012 2.488T16.5 19l1.5 1v1zm0-11h12V7H6zm6 6q.625 0 1.063-.437T13.5 14.5t-.437-1.062T12 13t-1.062.438T10.5 14.5t.438 1.063T12 16"></svg:path>`,
})
export class MaterialSymbolsDirectionsRailwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
