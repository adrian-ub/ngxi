import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CircleHalfFullIcon],svg[fluent-mdl2-circle-half-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 128q124 0 238 32t214 90t181 140t140 181t91 214t32 239t-32 238t-90 214t-140 181t-181 140t-214 91t-239 32t-238-32t-214-90t-181-140t-140-181t-91-214t-32-239t32-238t90-214t140-181t181-140t214-91t239-32m0 128q-106 0-204 27t-183 78t-156 120t-120 155t-77 184t-28 204h1536q0-106-27-204t-78-183t-120-156t-155-120t-184-77t-204-28"></svg:path>`,
})
export class FluentMdl2CircleHalfFullIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
