import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CompanyDirectoryMirroredIcon],svg[fluent-mdl2-company-directory-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0v2048h1664v-254h128v-128h-128v-257h128v-128h-128V769h128V641h-128V385h128V257h-128V0zm128 128h1408v1792H256zm128 384h640V384H384zm0 256h640V640H384zm960 892q39 0 73-14t60-40t40-60t15-74q0-39-14-73t-40-59t-60-41t-74-15q-39 0-73 15t-59 40t-41 60t-15 73q0 39 15 73t40 60t60 40t73 15m0-256q29 0 48 19t20 49q0 29-19 48t-49 20q-29 0-48-19t-20-49q0-29 19-48t49-20m0-640q39 0 73-14t60-40t40-60t15-74q0-39-14-73t-40-59t-60-41t-74-15q-39 0-73 15t-59 40t-41 60t-15 73q0 39 15 73t40 60t60 40t73 15m0-256q29 0 48 19t20 49q0 29-19 48t-49 20q-29 0-48-19t-20-49q0-29 19-48t49-20m-960 900h640v-128H384zm0 256h640v-128H384z"></svg:path>`,
})
export class FluentMdl2CompanyDirectoryMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
