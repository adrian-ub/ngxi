import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ActionCenterIcon],svg[fluent-mdl2-action-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2048v1664h-640l-384 384l-384-384H0zm1920 1536V128H128v1408h565l331 331l331-331z"></svg:path>`,
})
export class FluentMdl2ActionCenterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
