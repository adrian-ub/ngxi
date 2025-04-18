import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CakeIcon],svg[fluent-mdl2-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1216 256q-26 0-45-19t-19-45q0-12 8-31t18-40t21-40t17-30q6 11 16 30t21 40t19 40t8 31q0 26-19 45t-45 19m832 640v1152H0V896l1152-384V352q0-9 7-15t18-10t21-5t18-2q7 0 17 1t21 5t18 10t8 16v117l256-85zm-832-128q-7 0-17-1t-21-5t-18-10t-8-16v-89L405 896h1462l-366-366l-221 74v132q0 9-7 15t-18 10t-21 5t-18 2M128 1024v384h1792v-384zm1792 896v-384H128v384z"></svg:path>`,
})
export class FluentMdl2CakeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
