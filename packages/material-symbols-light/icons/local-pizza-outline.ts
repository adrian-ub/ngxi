import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalPizzaOutlineIcon],svg[material-symbols-light-local-pizza-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.192L3.346 7.231q1.875-1.473 4.066-2.352Q9.605 4 12 4t4.588.866q2.19.867 4.066 2.365zm0-1.792l7.3-10.95q-1.625-1.125-3.475-1.787T12 5t-3.812.663T4.7 7.45zM8.844 9.423q.416 0 .709-.291t.293-.707t-.29-.709t-.707-.293t-.71.291t-.293.707t.291.709t.707.293m3.154 5.077q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293M12 18.4"></svg:path>`,
})
export class MaterialSymbolsLightLocalPizzaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
