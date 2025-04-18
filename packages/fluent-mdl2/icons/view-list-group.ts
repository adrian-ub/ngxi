import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ViewListGroupIcon],svg[fluent-mdl2-view-list-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v2048H384V768H0V0zM640 640V128H128v512zm-128 640h512V768H512zm512 128H512v512h512zm896 0h-768v512h768zm0-640h-768v512h768zm0-128V128H768v512z"></svg:path>`,
})
export class FluentMdl2ViewListGroupIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
