import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PhotoCollectionIcon],svg[fluent-mdl2-photo-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1472 640q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19m576-128v1280H256v-256H0V256h1792v256zm-475 896l-357-358l-166 166l193 192zM128 384v549l320-319l512 512l256-256l448 447V384zm933 1024L448 794l-320 321v293zm859-768h-128v896H384v128h1536z"></svg:path>`,
})
export class FluentMdl2PhotoCollectionIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
