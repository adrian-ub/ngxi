import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TextRotateHorizontalIcon],svg[fluent-mdl2-text-rotate-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1664H0zm1920 1536V256H128v1408zM436 896l-48 128H285l240-640h102l240 640H764l-48-128zm140-375l-92 247h184zm803 922l163-163H256v-128h1286l-163-163l90-90l317 317l-317 317z"></svg:path>`,
})
export class FluentMdl2TextRotateHorizontalIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
