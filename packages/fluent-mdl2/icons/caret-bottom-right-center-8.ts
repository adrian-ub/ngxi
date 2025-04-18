import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CaretBottomRightCenter8Icon],svg[fluent-mdl2-caret-bottom-right-center-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 331v1461H331zm-256 618l-587 587h587z"></svg:path>`,
})
export class FluentMdl2CaretBottomRightCenter8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
