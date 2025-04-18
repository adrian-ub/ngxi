import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FlagIcon],svg[fluent-mdl2-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 256v1024h-896v-256H384v1024H256V0h896v256zm-896 640V128H384v768zm768-512h-640v768h640z"></svg:path>`,
})
export class FluentMdl2FlagIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
