import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileYMLIcon],svg[fluent-mdl2-file-y-m-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128v1792h1024v128H128V0h1115l549 549v731h-128V640h-512V128zm1024 91v293h293zm468 1189h112l-210 408v232h-106v-230l-204-410h121l126 274q4 9 7 19t6 19h1q6-21 15-38zm236 256q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19m0 128q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19"></svg:path>`,
})
export class FluentMdl2FileYMLIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
