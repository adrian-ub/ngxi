import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlugConnectIcon],svg[material-symbols-plug-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20v-1H6q-1.25 0-2.125-.875T3 16v-3H1v-2h2V8q0-1.25.875-2.125T6 5h1V4h2v16zm8 0v-4h-4v-2h4v-4h-4V8h4V4h2v1h1q1.25 0 2.125.875T21 8v3h2v2h-2v3q0 1.25-.875 2.125T18 19h-1v1z"></svg:path>`,
})
export class MaterialSymbolsPlugConnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
