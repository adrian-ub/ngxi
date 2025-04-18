import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PictureCenterIcon],svg[fluent-mdl2-picture-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1536H256V384h1536zM384 512v486l352-352l448 447l192-191l288 287V512zm0 896h933L736 827l-352 351zm1280 0v-37l-288-288l-102 101l225 224zm-192-640q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19M2048 0v2048H0V0zm-128 128H128v1792h1792z"></svg:path>`,
})
export class FluentMdl2PictureCenterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
