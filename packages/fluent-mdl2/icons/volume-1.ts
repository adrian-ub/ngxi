import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Volume1Icon],svg[fluent-mdl2-volume-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1130 662q73 73 111 166t39 196q0 103-38 196t-112 166l-90-90q54-54 83-124t29-148q0-77-29-147t-83-125zM677 256h91v1536h-90l-385-384H0V640h293zm-37 219L347 768H128v512h219l293 293z"></svg:path>`,
})
export class FluentMdl2Volume1Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
