import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ViewListIcon],svg[fluent-mdl2-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v2048H0V0zM128 640h512V128H128zm0 640h512V768H128zm512 128H128v512h512zm1280 0H768v512h1152zm0-640H768v512h1152zm0-128V128H768v512z"></svg:path>`,
})
export class FluentMdl2ViewListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
