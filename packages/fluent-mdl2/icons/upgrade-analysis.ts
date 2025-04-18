import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UpgradeAnalysisIcon],svg[fluent-mdl2-upgrade-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1277 1251l-90 90l-163-163v550H896v-550l-163 163l-90-90l317-318zm752 202l-557 558l-269-270l90-90l179 178l467-466zM256 1920h896v128H128V0h1115l549 549v734l-128 128V640h-512V128H256zM1280 512h293l-293-293z"></svg:path>`,
})
export class FluentMdl2UpgradeAnalysisIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
