import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EventAcceptedIcon],svg[fluent-mdl2-event-accepted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1024h-128V640H128v1152h896v128H0V128h384V0h128v128h1024V0h128v128zm-128 384V256h-256v128h-128V256H512v128H384V256H128v256zm19 851l90 90l-557 558l-269-270l90-90l179 178z"></svg:path>`,
})
export class FluentMdl2EventAcceptedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
