import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrangeSendBackwardIcon],svg[fluent-mdl2-arrange-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1536h512v128H0V0h1664v640h-128V128H128zm1920-768v1280H768V768zm-128 128H896v1024h1024z"></svg:path>`,
})
export class FluentMdl2ArrangeSendBackwardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
