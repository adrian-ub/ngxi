import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ShoppingCartSolidIcon],svg[fluent-mdl2-shopping-cart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1600 1536q40 0 75 15t61 41t41 61t15 75t-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75q0-31 11-64H885q11 33 11 64q0 40-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75q0-55 29-102t80-71L189 256H0V128h281l85 256h1682l-298 896H665l85 256zm-832 192q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m832 64q26 0 45-19t19-45t-19-45t-45-19t-45 19t-19 45t19 45t45 19"></svg:path>`,
})
export class FluentMdl2ShoppingCartSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
