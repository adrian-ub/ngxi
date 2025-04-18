import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignVerticalTopIcon],svg[fluent-mdl2-align-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v128H0V0zm-896 256h512v1152h-512zm128 1024h256V384h-256zM384 256h512v1664H384zm128 1536h256V384H512z"></svg:path>`,
})
export class FluentMdl2AlignVerticalTopIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
