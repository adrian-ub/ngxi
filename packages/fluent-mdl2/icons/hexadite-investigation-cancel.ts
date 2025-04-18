import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HexaditeInvestigationCancelIcon],svg[fluent-mdl2-hexadite-investigation-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m768 1169l197 113q9 7 28 25t40 40t40 41t29 30l-78 45l-384-220V805l384-220l384 220v286l-128-128v-84l-256-146l-256 146zM256 586v876l742 424l-94 93l-776-443V512L1024 0l896 512v451l-128 128V586l-768-439zm1773 675l-339 339l339 339l-90 90l-339-339l-339 339l-90-90l339-339l-339-339l90-90l339 339l339-339z"></svg:path>`,
})
export class FluentMdl2HexaditeInvestigationCancelIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
