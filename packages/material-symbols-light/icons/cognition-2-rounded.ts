import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCognition2RoundedIcon],svg[material-symbols-light-cognition-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 21q-.213 0-.356-.144T7 20.5v-3.262q-1.425-1.3-2.212-2.922T4 10.986q0-3.327 2.333-5.657T12 3q2.702 0 4.884 1.645t2.83 4.25l1.036 4.103q.1.38-.142.692q-.242.31-.646.31H18v3.385q0 .666-.475 1.14t-1.14.475H14v1.5q0 .213-.144.356T13.5 21zm.475-7.629q.61.61 1.502.61t1.51-.61l3.381-3.381q.613-.613.613-1.506t-.61-1.509q-.616-.61-1.509-.61t-1.502.61q-.771-.286-1.537-.13t-1.294.684t-.685 1.294t.131 1.537q-.61.616-.61 1.509t.61 1.502"></svg:path>`,
})
export class MaterialSymbolsLightCognition2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
