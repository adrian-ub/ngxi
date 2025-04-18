import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ClosePaneIcon],svg[fluent-mdl2-close-pane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v1152H0zm128 128v896h1280V512zm1792 896V512h-384v896zM989 643l317 317l-317 317l-90-90l162-163H640V896h421L899 733z"></svg:path>`,
})
export class FluentMdl2ClosePaneIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
