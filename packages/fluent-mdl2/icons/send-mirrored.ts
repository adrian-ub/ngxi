import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SendMirroredIcon],svg[fluent-mdl2-send-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2030 77l-220 883l220 883L51 960zm-337 822l149-598L503 899zm149 720l-147-592H515z"></svg:path>`,
})
export class FluentMdl2SendMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
