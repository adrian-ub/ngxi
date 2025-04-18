import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2NumberSymbolIcon],svg[fluent-mdl2-number-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1685 768h-326l-80 384h351l-32 128h-333l-113 512H989l111-512H778l-109 512H508l108-512H298l24-128h330l79-384H384l25-128h340l107-512h161L910 640h320l110-512h157l-107 512h323zm-559 384l82-384H886l-85 384z"></svg:path>`,
})
export class FluentMdl2NumberSymbolIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
