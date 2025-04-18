import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMandrillIcon],svg[logos-mandrill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M.832.452h254.849v225.642H.832V.452z" fill="#E6E6E1"></svg:path><svg:path d="M255.68.452H.833L128.264 186.69L255.68.451" fill="#D8D8D3"></svg:path><svg:path d="M101.3 226.094h53.926l-26.962-39.403l-26.965 39.403" fill="#B4B6B4"></svg:path><svg:path d="M128.302 118.827L73.94 39.038v68.492l31.042 45.595l23.267-34.23l.053-.068" fill="#1A1918"></svg:path><svg:path d="M128.302 118.827l23.412 34.371l30.844-45.097V39.038l-54.256 79.79" fill="#ED9D4A"></svg:path><svg:path d="M128.25 118.895l-23.268 34.23l23.344 34.273l23.388-34.2l-23.412-34.37l-.053.067" fill="#BB7731"></svg:path><svg:path d="M35.333 187.49H73.94v-79.96L35.333 50.86v136.63" fill="#4CB2D4"></svg:path><svg:path d="M35.333 39.038v11.823L73.94 107.53V39.038H35.333" fill="#1B82AD"></svg:path><svg:path d="M182.558 108.101v79.388h38.593V51.683L182.558 108.1" fill="#C02439"></svg:path><svg:path d="M221.15 39.038h-38.592v69.063l38.593-56.418V39.038" fill="#8F202F"></svg:path>`,
})
export class LogosMandrillIcon {
  readonly viewBox = input("0 0 256 227")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
