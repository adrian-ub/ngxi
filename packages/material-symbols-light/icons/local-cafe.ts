import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalCafeIcon],svg[material-symbols-light-local-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-1h14v1zm3.135-3.77q-1.304 0-2.22-.886Q5 14.458 5 13.192V4h14.308q.69 0 1.191.472T21 5.634v2.231q0 .69-.501 1.163q-.501.472-1.191.472h-2v3.692q0 1.266-.916 2.152q-.915.887-2.219.887zm9.173-7.73h2q.288 0 .49-.183T20 7.865v-2.23q0-.27-.202-.452Q19.596 5 19.308 5h-2z"></svg:path>`,
})
export class MaterialSymbolsLightLocalCafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
