import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SplitIcon],svg[fluent-mdl2-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1683 595l365 365l-365 365l-91-90l211-211h-651V896h651l-211-211zM456 685L245 896h651v128H245l211 211l-91 90L0 960l365-365z"></svg:path>`,
})
export class FluentMdl2SplitIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
