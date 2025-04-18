import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChevronUpSmallIcon],svg[fluent-mdl2-chevron-up-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 441l1017 1017l-242 241l-775-775l-775 775L7 1458z"></svg:path>`,
})
export class FluentMdl2ChevronUpSmallIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
