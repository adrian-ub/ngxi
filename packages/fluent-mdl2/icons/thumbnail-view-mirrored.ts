import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ThumbnailViewMirroredIcon],svg[fluent-mdl2-thumbnail-view-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1152h-640v640h640zm-128 512h-384v-384h384zm128-1408h-640v640h640zm-128 512h-384V384h384zM0 384v128h1152V384zm384 384h768V640H384zm768 512H0v128h1152zm0 256H384v128h768z"></svg:path>`,
})
export class FluentMdl2ThumbnailViewMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
