import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HotelIcon],svg[fluent-mdl2-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1152v768h-128v-128H128v128H0v-768h128v113l256-512V128h128v128h1024V128h128v384q27 0 50 10t40 27t28 41t10 50v256q0 39-21 70l149 299v-113zm-896-512v256h512V640zM512 384v384h512V640q0-27 10-50t27-40t41-28t50-10h384V384zm-248 896h1520l-128-256h-504q-27 0-50-10t-40-27t-28-41t-10-50H455zm1656 384v-256H128v256z"></svg:path>`,
})
export class FluentMdl2HotelIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
