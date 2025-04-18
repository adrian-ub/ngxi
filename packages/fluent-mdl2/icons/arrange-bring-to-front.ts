import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrangeBringToFrontIcon],svg[fluent-mdl2-arrange-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 1664H384V384h1280zM1536 512H512v1024h1024zM128 768h128v128H0V0h896v256H768V128H128zm1920 384v896h-896v-256h128v128h640v-640h-128v-128z"></svg:path>`,
})
export class FluentMdl2ArrangeBringToFrontIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
