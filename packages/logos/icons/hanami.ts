import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosHanamiIcon],svg[logos-hanami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DC3011" fill-opacity=".65" d="m152.228 2.788l103.633 117.055l-79.273 134.64l-152.716-33.887L8.97 65.076z"></svg:path><svg:path fill="#DC3011" fill-opacity=".65" d="m176.152 10.723l77.031 136.043l-105.534 115.217L5.316 197.085l17.758-155.22z"></svg:path><svg:path fill="#DC3011" d="m127.178 0l125.705 92.951l-49.547 148.18l-156.425-1.395L0 90.712z"></svg:path><svg:path fill="#FFF" d="M127.94 79.216c28.573 0 51.736 23.163 51.736 51.736s-23.163 51.737-51.736 51.737s-51.737-23.164-51.737-51.737s23.164-51.736 51.737-51.736m0 11.113c-22.435 0-40.623 18.188-40.623 40.623s18.188 40.623 40.623 40.623s40.623-18.188 40.623-40.623s-18.188-40.623-40.623-40.623m18.17 24.313l6.682 9.014l-24.852 30.899l-24.78-30.9l6.636-9.013z"></svg:path>`,
})
export class LogosHanamiIcon {
  readonly viewBox = input("0 0 256 262")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
