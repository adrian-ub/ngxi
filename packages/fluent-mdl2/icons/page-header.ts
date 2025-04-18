import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageHeaderIcon],svg[fluent-mdl2-page-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127 0h1792v2048H127zm1665 1921V129H256v1792zM1663 258v639H383V258zm-127 510V387H512v381zm127 256v641H383v-641zm-127 512v-383H512v383z"></svg:path>`,
})
export class FluentMdl2PageHeaderIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
