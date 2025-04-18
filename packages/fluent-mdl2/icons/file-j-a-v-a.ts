import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileJAVAIcon],svg[fluent-mdl2-file-j-a-v-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1280H128V0h1115l549 549v731h-128V640h-512V128H256zm1024-768h293l-293-293zM104 1957q34 0 54-15t32-39t15-52t4-56v-387h104v404q0 48-11 91t-37 75t-63 51t-91 19q-18 0-36-1t-35-9v-98q14 9 30 13t34 4m621-549l234 630H844l-56-161H540l-54 161H372l235-630zm35 384l-87-251q-3-10-5-19t-5-20q-3 22-9 39l-86 251zm728-384l-226 630h-116l-223-630h115l155 478q5 13 7 26t6 27q2-14 5-27t8-27l159-477zm552 630h-115l-56-161h-248l-54 161h-115l236-630h118zm-199-246l-88-251q-3-9-5-19t-5-18q-2 9-3 19t-5 18l-87 251z"></svg:path>`,
})
export class FluentMdl2FileJAVAIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
