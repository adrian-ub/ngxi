import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PhotoErrorIcon],svg[fluent-mdl2-photo-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 1600v-320h128v320zm0 192v-128h128v128zM0 128h2048v1434l-128-256V256H128v677l448-447l572 572l-60 120l-512-512l-448 449v421h781l-64 128H0zm1600 384q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19M896 1920l576-1152l576 1152zm181-112h790l-395-790z"></svg:path>`,
})
export class FluentMdl2PhotoErrorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
