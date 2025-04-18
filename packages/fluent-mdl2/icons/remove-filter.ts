import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RemoveFilterIcon],svg[fluent-mdl2-remove-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128h1792v1792H128zm1664 1664V256H256v1536zM621 1517l-90-90l402-403l-402-403l90-90l403 402l403-402l90 90l-402 403l402 403l-90 90l-403-402z"></svg:path>`,
})
export class FluentMdl2RemoveFilterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
