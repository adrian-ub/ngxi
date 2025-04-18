import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RemoveEventIcon],svg[fluent-mdl2-remove-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 128h384v1792H0V128h384V0h128v128h1024V0h128zM384 256H128v256h1792V256h-256v128h-128V256H512v128H384zM128 1792h1792V640H128zm1171-941l90 90l-274 275l274 275l-90 90l-275-275l-275 275l-90-90l274-275l-274-275l90-90l275 275z"></svg:path>`,
})
export class FluentMdl2RemoveEventIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
