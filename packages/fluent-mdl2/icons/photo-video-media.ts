import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PhotoVideoMediaIcon],svg[fluent-mdl2-photo-video-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 512h128v128H256zm0 256h128v128H256zm1024-128h-128V512h128zm768 128v1152H512v-640H0V128h1536v640zm-128 128H640v549l320-319l448 447l320-319l192 191zM512 1152V768h896V256h-128v128h-128V256H384v128H256V256H128v896h128v-128h128v128zm128 640h805l-485-486l-320 321zm1280 0v-165l-192-193l-229 230l128 128zm-448-640q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19"></svg:path>`,
})
export class FluentMdl2PhotoVideoMediaIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
