import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChevronFold10Icon],svg[fluent-mdl2-chevron-fold-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 1186l610 610l-145 145l-465-465l-465 465l-145-145zm0-324L414 252l145-145l465 465l465-465l145 145z"></svg:path>`,
})
export class FluentMdl2ChevronFold10Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
