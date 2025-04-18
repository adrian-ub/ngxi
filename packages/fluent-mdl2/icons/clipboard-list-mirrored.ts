import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ClipboardListMirroredIcon],svg[fluent-mdl2-clipboard-list-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256v1792h1536V256h-512q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100zm1152 256H640V384h256V256q0-27 10-50t27-40t41-28t50-10q27 0 50 10t40 27t28 41t10 50v128h256zM384 384h128v256h1024V384h128v1536H384zm896 512H512v128h768zm0 384H512v128h768zm0 384H512v128h768zm256-768h-128v128h128zm0 384h-128v128h128zm0 384h-128v128h128z"></svg:path>`,
})
export class FluentMdl2ClipboardListMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
