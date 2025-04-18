import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNtCalculadoraIcon],svg[arcticons-nt-calculadora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4m19.227 9.926h9m-9 17.831h9m-26.471-3.935l8 7.937m-.039-8l-7.96 7.969m3.999-26.302v9m-4.5-4.5h9"></svg:path><svg:circle cx="33.227" cy="30.265" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.227" cy="36.249" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsNtCalculadoraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
