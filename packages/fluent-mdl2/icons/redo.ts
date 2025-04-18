import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RedoIcon],svg[fluent-mdl2-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 512h421q-71-72-135-140t-135-121t-152-86t-191-33q-117 0-221 45T557 301T434 483t-46 221q0 112 43 215t122 183l836 837l-90 90l-837-836q-97-97-149-224t-53-265q0-96 25-185t71-167t110-142t142-110t167-71T960 4q84 0 153 15t129 43t112 66t103 85t101 99t106 109V0h128v640h-640z"></svg:path>`,
})
export class FluentMdl2RedoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
