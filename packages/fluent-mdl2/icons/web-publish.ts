import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2WebPublishIcon],svg[fluent-mdl2-web-publish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1024h-128V640H128v1024h1408v128H0V128zm-128 128H128v256h1792zm-192 870l320 319l-91 91l-165-165v677h-128v-677l-165 165l-91-91z"></svg:path>`,
})
export class FluentMdl2WebPublishIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
