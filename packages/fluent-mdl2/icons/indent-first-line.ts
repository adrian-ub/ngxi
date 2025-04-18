import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IndentFirstLineIcon],svg[fluent-mdl2-indent-first-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 128h768v128h-768zM768 1792v-128h1152v128zm0-1024V640h1152v128zm0 512v-128h1152v128zM573 3l317 317l-317 317l-90-90l163-163H0V256h646L483 93z"></svg:path>`,
})
export class FluentMdl2IndentFirstLineIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
