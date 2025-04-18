import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SliderThumbIcon],svg[fluent-mdl2-slider-thumb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1365 341v1366q0 70-27 132t-73 108t-109 74t-132 27q-70 0-132-27t-108-73t-74-109t-27-132V341q0-70 27-132t73-108t109-74t132-27q70 0 132 27t108 73t74 109t27 132"></svg:path>`,
})
export class FluentMdl2SliderThumbIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
