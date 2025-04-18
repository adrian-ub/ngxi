import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibVueJsIcon],svg[cib-vue-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.306 4.019H19.5L16 9.556l-3-5.537H2L16 28L30 4.019zm-18.825 2h3.363L16 18.406l7.15-12.387h3.363L16.001 24.031z"></svg:path>`,
})
export class CibVueJsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
