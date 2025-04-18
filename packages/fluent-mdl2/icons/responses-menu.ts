import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ResponsesMenuIcon],svg[fluent-mdl2-responses-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1536v-384h384v384zm128-256v128h128v-128zm256-768v384H640V512zM896 768V640H768v128zm512-128v128h-256V640zM256 0h1536v2048H546l128-128h990V128H384v1118l-61-61l-67 66zm896 1408v-128h256v128zm-384 384H250l163 163l-90 90L6 1728l317-317l90 90l-163 163h518z"></svg:path>`,
})
export class FluentMdl2ResponsesMenuIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
