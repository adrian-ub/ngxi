import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ContextMenuIcon],svg[fluent-mdl2-context-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 128v1664H256V128zm-128 128H384v1408h1280zm-256 768H640V896h768zm0 384H640v-128h768zm0-768H640V512h768z"></svg:path>`,
})
export class FluentMdl2ContextMenuIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
