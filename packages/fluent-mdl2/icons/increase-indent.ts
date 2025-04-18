import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IncreaseIndentIcon],svg[fluent-mdl2-increase-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128h1792v128H128zm0 1664v-128h1792v128zM1152 768V640h768v128zm0 512v-128h768v128zm-669-93l163-163H0V896h646L483 733l90-90l317 317l-317 317z"></svg:path>`,
})
export class FluentMdl2IncreaseIndentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
