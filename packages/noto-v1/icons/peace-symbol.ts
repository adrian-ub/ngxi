import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1PeaceSymbolIcon],svg[noto-v1-peace-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f79229" stroke-miterlimit="10" stroke-width="11"><svg:circle cx="64" cy="64" r="58"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M64 6v116m0-58l41.01 41.01m-82.02 0L64 64"></svg:path></svg:g>`,
})
export class NotoV1PeaceSymbolIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
