import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AsteriskIcon],svg[fluent-mdl2-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1943 568l-791 456l791 456l-64 112l-791-457v913H960v-913l-791 457l-64-112l791-456l-791-456l64-112l791 457V0h128v913l791-457z"></svg:path>`,
})
export class FluentMdl2AsteriskIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
