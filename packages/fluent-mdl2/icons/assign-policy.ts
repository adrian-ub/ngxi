import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AssignPolicyIcon],svg[fluent-mdl2-assign-policy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1024v768h128v128H256V0h1536v1024zm0-896v768h1280V128zm768 384V384h128v256H768V384h128v128zm-512 640h1408v896H640zm1211 128H837l507 262zM768 1920h1152v-539l-576 297l-576-297z"></svg:path>`,
})
export class FluentMdl2AssignPolicyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
