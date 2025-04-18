import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AscendingIcon],svg[fluent-mdl2-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1216 1024h512l-320 640h320v128h-512l320-640h-320zm-704 614l163-163l90 90l-317 318l-317-318l90-90l163 163V128h128zm811-870l-43 128h-128l256-768h128l256 768h-128l-43-128zm149-448l-107 320h214z"></svg:path>`,
})
export class FluentMdl2AscendingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
