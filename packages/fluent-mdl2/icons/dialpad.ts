import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DialpadIcon],svg[fluent-mdl2-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 384H384V128h256zm512 0H896V128h256zm512 0h-256V128h256zM640 896H384V640h256zm512 0H896V640h256zm512 0h-256V640h256zM640 1408H384v-256h256zm512 0H896v-256h256zm0 512H896v-256h256zm512-512h-256v-256h256z"></svg:path>`,
})
export class FluentMdl2DialpadIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
