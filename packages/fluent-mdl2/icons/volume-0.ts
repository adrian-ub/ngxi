import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Volume0Icon],svg[fluent-mdl2-volume-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M677 256h91v1536h-90l-385-384H0V640h293zm-37 1317V475L347 768H128v512h219z"></svg:path>`,
})
export class FluentMdl2Volume0Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
