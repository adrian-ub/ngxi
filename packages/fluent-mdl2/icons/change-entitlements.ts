import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChangeEntitlementsIcon],svg[fluent-mdl2-change-entitlements-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1920h899l128 128H0V0h1115l549 549v219h-128V640h-512V128H128zM1152 219v293h293zM256 512h639v127H256zm1151 256v127H256V768zM256 1024h767v127H256zm768 256v127H256v-127zm-768 383v-127h768l-128 127zm1213-162l-163 162h614v129h-614l163 163l-90 90l-318-317l318-317zm297-349l-163-163l90-90l318 317l-318 317l-90-90l163-163h-614v-128z"></svg:path>`,
})
export class FluentMdl2ChangeEntitlementsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
