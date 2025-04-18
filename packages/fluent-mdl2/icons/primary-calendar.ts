import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PrimaryCalendarIcon],svg[fluent-mdl2-primary-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2031 1537l-266 197l102 313l-267-193l-266 194l101-314l-266-197h335l97-310l95 310zm17-1409v1249h-128V640H128v1152h1116l4 3l-41 125H0V128h384V0h128v128h1024V0h128v128zm-128 384V256h-256v128h-128V256H512v128H384V256H128v256z"></svg:path>`,
})
export class FluentMdl2PrimaryCalendarIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
