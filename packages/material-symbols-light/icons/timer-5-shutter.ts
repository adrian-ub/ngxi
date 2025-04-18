import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer5ShutterIcon],svg[material-symbols-light-timer-5-shutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.885 18.116v-1.231h5.384q.27 0 .443-.174t.173-.442v-3.038q0-.27-.173-.442t-.443-.173H8.885V5.885h7.23v1.23h-6v4.27H14.5q.671 0 1.143.472T16.115 13v3.27q0 .769-.538 1.307t-1.308.539z"></svg:path>`,
})
export class MaterialSymbolsLightTimer5ShutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
