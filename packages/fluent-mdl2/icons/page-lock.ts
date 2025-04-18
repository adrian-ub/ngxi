import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageLockIcon],svg[fluent-mdl2-page-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 640V128H256v1792h896v128H128V0h1115l549 549v337q-31-10-63-16t-65-6V640zm128-128h293l-293-293zm768 896v640h-768v-640h128v-128q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100v128zm-512 0h256v-128q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50zm384 128h-512v384h512z"></svg:path>`,
})
export class FluentMdl2PageLockIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
