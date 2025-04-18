import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CopyIcon],svg[fluent-mdl2-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 805v1243H640v-384H128V0h859l384 384h128zm-384-37h165l-165-165zM640 384h549L933 128H256v1408h384zm1152 512h-384V512H768v1408h1024z"></svg:path>`,
})
export class FluentMdl2CopyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
