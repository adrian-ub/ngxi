import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EngineeringGroupIcon],svg[fluent-mdl2-engineering-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M453 512q110-123 258-189t313-67q32 0 64 3t64 8v130q-32-6-64-9t-64-4q-104 0-200 33t-180 95zm1198 640q6-32 9-64t4-64q0-32-3-64t-10-64h130q5 32 8 64t3 64t-3 64t-8 64zM515 1408q45 60 102 107t122 81t138 50t147 18q32 0 64-3t64-10v130q-32 5-64 8t-64 3q-103 0-200-26t-183-77t-158-121t-123-160zM2048 128v640h-768V128zm-128 128h-512v384h512zm-640 1024h768v640h-768zm128 512h512v-384h-512zm-640-512H0V640h768zM640 768H128v384h512z"></svg:path>`,
})
export class FluentMdl2EngineeringGroupIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
