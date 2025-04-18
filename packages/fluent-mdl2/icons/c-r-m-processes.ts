import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CRMProcessesIcon],svg[fluent-mdl2-c-r-m-processes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v1152H0zm128 1024h293l449-448l-449-448H128zm1792 0V512H603l447 448l-447 448z"></svg:path>`,
})
export class FluentMdl2CRMProcessesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
