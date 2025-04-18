import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FitWidthIcon],svg[fluent-mdl2-fit-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h2048v1536H0zm1920 1408V384H128v1280zM555 1109l-86 86l-236-235l236-235l86 86l-85 85h426v128H470zm938 0l85-85h-426V896h426l-85-85l86-86l236 235l-236 235z"></svg:path>`,
})
export class FluentMdl2FitWidthIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
