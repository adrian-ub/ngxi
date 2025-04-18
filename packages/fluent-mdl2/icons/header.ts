import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HeaderIcon],svg[fluent-mdl2-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0h1792v2048H128zm1664 1920V128H256v1792zM1664 256v512H384V256zm-128 384V384H512v256z"></svg:path>`,
})
export class FluentMdl2HeaderIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
