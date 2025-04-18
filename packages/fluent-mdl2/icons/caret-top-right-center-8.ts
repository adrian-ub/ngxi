import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CaretTopRightCenter8Icon],svg[fluent-mdl2-caret-top-right-center-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 256v1461L331 256zm-256 256H949l587 587z"></svg:path>`,
})
export class FluentMdl2CaretTopRightCenter8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
