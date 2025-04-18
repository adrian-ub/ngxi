import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TextParagraphOptionIcon],svg[fluent-mdl2-text-paragraph-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m308 640l-48 128H157l240-640h102l240 640H636l-48-128zm140-375l-92 247h184zm64 1405l163-163l90 90l-317 317l-317-317l90-90l163 163V896h128zm512-1542h896v128h-896zm0 640V640h896v128zm0 512v-128h896v128zm0 512v-128h896v128z"></svg:path>`,
})
export class FluentMdl2TextParagraphOptionIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
