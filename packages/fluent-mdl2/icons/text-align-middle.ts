import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TextAlignMiddleIcon],svg[fluent-mdl2-text-align-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 384h1792v128H128zm256 512h1280v128H384zm-256 640v-128h1792v128z"></svg:path>`,
})
export class FluentMdl2TextAlignMiddleIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
