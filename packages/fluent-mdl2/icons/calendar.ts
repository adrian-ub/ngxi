import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CalendarIcon],svg[fluent-mdl2-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768h128v128H768zm384 768h128v128h-128zm384-768h128v128h-128zm-384 0h128v128h-128zm-384 256h128v128H768zm-384 0h128v128H384zm1152 0h128v128h-128zm-384 0h128v128h-128zm-384 256h128v128H768zm-384 0h128v128H384zm1152 0h128v128h-128zm-384 0h128v128h-128zm-384 256h128v128H768zm-384 0h128v128H384zM2048 128v1792H0V128h384V0h128v128h1024V0h128v128zM128 256v256h1792V256h-256v128h-128V256H512v128H384V256zm1792 1536V640H128v1152z"></svg:path>`,
})
export class FluentMdl2CalendarIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
