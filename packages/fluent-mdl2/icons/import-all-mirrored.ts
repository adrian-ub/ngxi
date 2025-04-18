import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ImportAllMirroredIcon],svg[fluent-mdl2-import-all-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1030 896v128l772 1l-289 290l90 90l445-445l-445-445l-90 90l292 292zM902 512H6v896h896zM134 896V640h256v256zm384-256h256v256H518zm256 384v256H518v-256zm-384 256H134v-256h256z"></svg:path>`,
})
export class FluentMdl2ImportAllMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
