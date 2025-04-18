import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPrivacyTipRoundedIcon],svg[material-symbols-light-privacy-tip-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.23q.214 0 .357-.143t.143-.356v-4.654q0-.213-.144-.356t-.357-.144t-.356.144t-.143.356v4.654q0 .212.144.356t.357.144M12 9q.262 0 .439-.177q.176-.177.176-.438q0-.262-.177-.439T12 7.77t-.438.177t-.177.439t.177.438T12 9m0 11.842q-.136 0-.287-.025t-.28-.075Q8.48 19.617 6.74 16.926T5 11.1V6.817q0-.514.293-.926q.292-.412.757-.597l5.385-2q.292-.106.565-.106t.566.106l5.384 2q.464.186.757.597q.293.412.293.926V11.1q0 3.135-1.74 5.826t-4.692 3.816q-.131.05-.281.075t-.287.025"></svg:path>`,
})
export class MaterialSymbolsLightPrivacyTipRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
