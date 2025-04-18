import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ImagePixelIcon],svg[fluent-mdl2-image-pixel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v1536H0V256zm-128 128H128v512h256v256H128v512h1024v-256h256v256h256v-256h256zM640 896H384V640h256zm0 256V896h256v256zm512 0v256H896v-256zm512 0v256h-256v-256zm0-256h-256V640h256z"></svg:path>`,
})
export class FluentMdl2ImagePixelIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
