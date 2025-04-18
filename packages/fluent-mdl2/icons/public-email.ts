import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PublicEmailIcon],svg[fluent-mdl2-public-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1635 1373l90-90l317 317l-317 317l-90-90l163-163h-668l163 163l-90 90l-317-317l317-317l90 90l-163 163h668zM0 384h2048v1024l-128-128V583l-896 449l-896-449v953h640v128H0zm271 128l753 376l753-376z"></svg:path>`,
})
export class FluentMdl2PublicEmailIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
