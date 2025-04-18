import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageListSolidIcon],svg[fluent-mdl2-page-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 0v1792H256V0zM640 1152H512v128h128zm0-384H512v128h128zm0-384H512v128h128zm896 768H768v128h768zm0-384H768v128h768zm0-384H768v128h768z"></svg:path>`,
})
export class FluentMdl2PageListSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
