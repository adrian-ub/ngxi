import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CaretBottomLeftCenter8Icon],svg[fluent-mdl2-caret-bottom-left-center-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1717 1792H256V331zM512 1536h587L512 949z"></svg:path>`,
})
export class FluentMdl2CaretBottomLeftCenter8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
