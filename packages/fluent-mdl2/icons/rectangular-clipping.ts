import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RectangularClippingIcon],svg[fluent-mdl2-rectangular-clipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v1152h-128V384H128v1280h1024v128H0V256zm-256 1408h256v128h-256v256h-128v-256h-256v-128h256v-256h128z"></svg:path>`,
})
export class FluentMdl2RectangularClippingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
