import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ViewListTreeIcon],svg[fluent-mdl2-view-list-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v2048H768v-640H384V768H0V0zM640 640V128H128v512zm384 640V768H512v512zm384 128H896v512h512zm512 0h-384v512h384zm0-640h-768v512h768zm0-128V128H768v512z"></svg:path>`,
})
export class FluentMdl2ViewListTreeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
