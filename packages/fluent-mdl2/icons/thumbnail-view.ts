import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ThumbnailViewIcon],svg[fluent-mdl2-thumbnail-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1152h640v640H0zm128 512h384v-384H128zM0 256h640v640H0zm128 512h384V384H128zm1920-384v128H896V384zm-384 384H896V640h768zm-768 512h1152v128H896zm0 256h768v128H896z"></svg:path>`,
})
export class FluentMdl2ThumbnailViewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
