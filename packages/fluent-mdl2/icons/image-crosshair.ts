import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ImageCrosshairIcon],svg[fluent-mdl2-image-crosshair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1088 870l192 191v182l-192-193l-166 166l65 64H805L320 794L128 987v549h640v128H0V256h1792v1024h-128V384H128v421l192-191l512 512zm384-358q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19m-64 384h128v384h-128zm0 768h128v384h-128zm-512-256h384v128H896zm1152 0v128h-384v-128z"></svg:path>`,
})
export class FluentMdl2ImageCrosshairIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
