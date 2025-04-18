import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PictureIcon],svg[fluent-mdl2-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 512h256v1280H256v-256H0V256h1792zM128 384v1024h1536V384zm1792 1280V640h-128v896H384v128zM256 1280V512h1280v768zm128-640v512h1024V640z"></svg:path>`,
})
export class FluentMdl2PictureIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
