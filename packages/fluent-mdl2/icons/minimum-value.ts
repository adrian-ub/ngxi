import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MinimumValueIcon],svg[fluent-mdl2-minimum-value-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512h128v896h-128zm-256 0h128v896H768zm1152 512h-421l162 163l-90 90l-317-317l317-317l90 90l-162 163h421zM349 643l317 317l-317 317l-90-90l162-163H0V896h421L259 733z"></svg:path>`,
})
export class FluentMdl2MinimumValueIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
