import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MailTentativeMirroredIcon],svg[fluent-mdl2-mail-tentative-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v640h128V648l896 447l896-447v888H512v128h1536V384zm1024 569L143 512h1762zm-640 967H256v128h128zm-64-768q-53 0-99 20t-82 55t-55 81t-20 100q0 46 14 81t35 63t47 50t46 45t36 45t14 52v48h128v-48q0-47-14-81t-35-63t-47-50t-46-45t-36-45t-14-52q0-27 10-50t27-40t41-28t50-10q27 0 50 10t40 27t28 41t10 50h128q0-53-20-99t-55-82t-81-55t-100-20"></svg:path>`,
})
export class FluentMdl2MailTentativeMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
