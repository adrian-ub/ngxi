import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ShapeSolidIcon],svg[fluent-mdl2-shape-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 128h1152v1152h-234l-517-896l-103 177q-55-85-131-152T896 297zm205 595l-468 810q-29 3-57 3q-119 0-224-45t-183-124t-123-183T0 960q0-119 45-224t124-183t183-123t224-46q85 0 164 24t148 68t123 106t90 141M595 1920l702-1216l702 1216z"></svg:path>`,
})
export class FluentMdl2ShapeSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
