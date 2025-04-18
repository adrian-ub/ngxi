import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SwitchIcon],svg[fluent-mdl2-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1408v128H250l163 163l-90 90L6 1472l317-317l90 90l-163 163zm-413-605l163-163H0V512h1798l-163-163l90-90l317 317l-317 317z"></svg:path>`,
})
export class FluentMdl2SwitchIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
