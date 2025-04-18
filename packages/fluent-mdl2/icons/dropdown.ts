import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DropdownIcon],svg[fluent-mdl2-dropdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h2048v1408H0zm1920 1280V384H128v1152zm-128-640l-256 256l-256-256z"></svg:path>`,
})
export class FluentMdl2DropdownIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
