import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer5ShutterOutlineIcon],svg[material-symbols-light-timer-5-shutter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.885 18.116v-1.231h5.384q.27 0 .443-.174t.173-.442v-3.038q0-.27-.173-.442t-.443-.173H8.885V5.885h7.23v1.23h-6v4.27h4.154q.77 0 1.308.538t.539 1.308v3.038q0 .77-.539 1.308t-1.308.538z"></svg:path>`,
})
export class MaterialSymbolsLightTimer5ShutterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
