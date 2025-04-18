import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MailAttachedIcon],svg[fluent-mdl2-mail-attached-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v768h-128V648l-244 121h-141q-70 0-142-1l512-256H143l881 441v142L128 648v888h896v128H0zm1920 896h128v320q0 93-35 174t-96 142t-142 96t-175 36q-93 0-174-35t-142-96t-96-142t-36-175v-384q0-66 25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124v320q0 40-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75v-256h128v256q0 26 19 45t45 19t45-19t19-45v-320q0-40-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75v384q0 66 25 124t68 102t102 69t125 25t124-25t101-68t69-102t26-125z"></svg:path>`,
})
export class FluentMdl2MailAttachedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
