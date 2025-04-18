import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GroupListIcon],svg[fluent-mdl2-group-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640h1408v128H640zm1408-384v128H640V256zM384 128v128H256v512h128v128H128V128zm256 1408h1408v128H640zm0-384h1408v128H640zm-256-128v128H256v512h128v128H128v-768z"></svg:path>`,
})
export class FluentMdl2GroupListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
