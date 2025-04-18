import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OrgIcon],svg[fluent-mdl2-org-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 1280h256v640h-640v-640h256v-256H384v256h256v640H0v-640h256V896h640V640H640V0h640v640h-256v256h640zM768 128v384h384V128zM512 1792v-384H128v384zm1280 0v-384h-384v384z"></svg:path>`,
})
export class FluentMdl2OrgIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
