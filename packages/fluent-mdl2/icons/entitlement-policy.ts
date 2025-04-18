import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EntitlementPolicyIcon],svg[fluent-mdl2-entitlement-policy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128v1792h896v128H0V0h1115l549 549v731h-128V640h-512V128zm1024 91v293h293zM256 512h640v128H256zm1152 256v128H256V768zM256 1152v-128h1152v128zm0 256v-128h768v128zm0 256v-128h768v128zm1152-256h640v128h-640zm0 384v-128h640v128zm0 256v-128h640v128zm-256-512v-128h128v128zm0 256v-128h128v128zm0 256v-128h128v128z"></svg:path>`,
})
export class FluentMdl2EntitlementPolicyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
