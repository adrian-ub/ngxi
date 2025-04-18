import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RawSourceIcon],svg[fluent-mdl2-raw-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512H0V384h896zM384 768h896v128H384zm1024 0h640v128h-640zm640-384v128H1024V384zM384 1152h1280v128H384zM0 1536h1280v128H0z"></svg:path>`,
})
export class FluentMdl2RawSourceIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
