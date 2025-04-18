import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEMobiledataBadgeRoundedIcon],svg[material-symbols-light-e-mobiledata-badge-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm9-3.5q.212 0 .356-.144t.144-.357t-.144-.356t-.356-.143H9.885v-3h3.73q.213 0 .357-.144t.144-.357t-.144-.356t-.356-.143H9.885v-3h4.73q.213 0 .357-.144t.144-.357t-.144-.356t-.356-.143H9.693q-.349 0-.578.232q-.23.232-.23.576v7.384q0 .344.232.576t.575.232z"></svg:path>`,
})
export class MaterialSymbolsLightEMobiledataBadgeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
