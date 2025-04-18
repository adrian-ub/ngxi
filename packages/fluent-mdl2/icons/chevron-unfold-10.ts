import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChevronUnfold10Icon],svg[fluent-mdl2-chevron-unfold-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M559 815L414 670l610-610l610 610l-145 145l-465-465zm930 418l145 145l-610 610l-610-610l145-145l465 465z"></svg:path>`,
})
export class FluentMdl2ChevronUnfold10Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
