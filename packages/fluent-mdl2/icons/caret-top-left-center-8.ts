import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CaretTopLeftCenter8Icon],svg[fluent-mdl2-caret-top-left-center-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1717 256L256 1717V256zM512 1099l587-587H512z"></svg:path>`,
})
export class FluentMdl2CaretTopLeftCenter8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
