import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GlimmerIcon],svg[fluent-mdl2-glimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 0h256v1280h-256zM0 2048v-256h1280v256zM486 666l180-180l896 896l-180 180z"></svg:path>`,
})
export class FluentMdl2GlimmerIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
