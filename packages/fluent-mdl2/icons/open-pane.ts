import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OpenPaneIcon],svg[fluent-mdl2-open-pane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v1152H0zm128 128v896h1280V512zm1792 896V512h-384v896zm-640-512v128H859l162 163l-90 90l-317-317l317-317l90 90l-162 163z"></svg:path>`,
})
export class FluentMdl2OpenPaneIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
