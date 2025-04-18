import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiWsObservabilityIcon],svg[oui-ws-observability-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.819 9.366v-.003a3 3 0 0 0-.153-.356L12.16 3.303a.7.7 0 0 0-.151-.22a2.17 2.17 0 0 0-3.073 0a.72.72 0 0 0-.212.511v1.267H7.276V3.594a.72.72 0 0 0-.212-.512a2.17 2.17 0 0 0-3.073 0a.7.7 0 0 0-.15.22L1.333 9.008a3 3 0 0 0-.153.356v.003a3.138 3.138 0 1 0 6.095 1.047V6.309h1.448v4.104a3.137 3.137 0 1 0 6.095-1.047ZM5.103 4.033a.72.72 0 0 1 .725-.073v3.81a3.13 3.13 0 0 0-2.167-.46zm-.965 8.07a1.69 1.69 0 1 1 0-3.38a1.69 1.69 0 0 1 0 3.38m6.034-8.143a.73.73 0 0 1 .725.073l1.44 3.278a3.13 3.13 0 0 0-2.166.46zm1.69 8.143a1.69 1.69 0 1 1 0-3.38a1.69 1.69 0 0 1 0 3.38"></svg:path>`,
})
export class OuiWsObservabilityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
