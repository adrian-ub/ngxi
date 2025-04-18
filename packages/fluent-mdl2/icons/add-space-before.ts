import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddSpaceBeforeIcon],svg[fluent-mdl2-add-space-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1792v-128h1792v128zm0-640h1792v128H128zm1149-451l-317 317l-317-317l90-90l163 163V128h128v646l163-163z"></svg:path>`,
})
export class FluentMdl2AddSpaceBeforeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
