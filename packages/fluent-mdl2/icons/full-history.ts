import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FullHistoryIcon],svg[fluent-mdl2-full-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512h128v512H896zM512 768H0V256h128v274q67-123 163-221t212-166T752 37t272-37q141 0 272 36t245 103t207 160t160 208t103 245t37 272h-128q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-129 0-251 36T546 267T355 428T215 640h297zm512 384h1024v128H1024zm0 384h1024v128H1024zm0 384h1024v128H1024zm-863-657q36 129 105 239t166 194t214 140t250 74v130q-154-21-292-83t-250-158t-193-224t-123-278z"></svg:path>`,
})
export class FluentMdl2FullHistoryIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
