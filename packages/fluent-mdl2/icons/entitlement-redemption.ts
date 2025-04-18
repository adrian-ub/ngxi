import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EntitlementRedemptionIcon],svg[fluent-mdl2-entitlement-redemption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 512h640v128H256zm1152 256v128H256V768zm0 256v128H256v-128zm0 256v128H256v-128zM256 1664v-128h926l-128 128zm-128 256h1027l128 128H0V0h1115l549 549v862l-128 128V640h-512V128H128zM1152 219v293h293zm787 1144l90 90l-557 558l-269-270l90-90l179 178z"></svg:path>`,
})
export class FluentMdl2EntitlementRedemptionIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
