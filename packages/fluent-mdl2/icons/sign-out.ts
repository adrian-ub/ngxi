import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SignOutIcon],svg[fluent-mdl2-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1792h896v128H128V0h1024v128H256zm1679-832l-487 488l-80-80l345-344H640V896h1073l-345-344l80-80z"></svg:path>`,
})
export class FluentMdl2SignOutIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
