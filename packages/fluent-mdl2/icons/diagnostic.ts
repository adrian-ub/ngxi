import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DiagnosticIcon],svg[fluent-mdl2-diagnostic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v1792H128V128zM256 256v1024h150l109-109q19-19 45-19t45 19l177 176l244-947q5-21 22-34t40-14q23 0 40 13t22 36l102 417h156q22 0 39 13t23 35l72 286h250V256zm1536 1536v-512h-300q-23 0-40-13t-22-36l-72-285h-156q-23 0-40-13t-22-36l-54-218l-208 809q-5 21-22 34t-40 14q-26 0-45-19l-211-211l-83 83q-19 19-45 19H256v384z"></svg:path>`,
})
export class FluentMdl2DiagnosticIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
