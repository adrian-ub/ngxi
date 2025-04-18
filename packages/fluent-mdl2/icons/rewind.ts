import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RewindIcon],svg[fluent-mdl2-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1674L90 1024l806-645zm-128-267V645l-474 379zm218-383l806-645v1295zm678 383V645l-474 379z"></svg:path>`,
})
export class FluentMdl2RewindIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
