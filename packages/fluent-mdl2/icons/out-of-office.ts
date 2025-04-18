import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OutOfOfficeIcon],svg[fluent-mdl2-out-of-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1600 1024q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19m-832 256h128v768H768zM1920 0v2048h-128V128H896v768H768V0zM347 1024h805v128H347l210 211l-90 90l-365-365l365-365l90 90z"></svg:path>`,
})
export class FluentMdl2OutOfOfficeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
