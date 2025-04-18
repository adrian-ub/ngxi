import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReviewSolidIcon],svg[fluent-mdl2-review-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m448 768l-320 320V768H0V128h1664v640zm-64 256h1664v640h-128v320l-320-320H384z"></svg:path>`,
})
export class FluentMdl2ReviewSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
