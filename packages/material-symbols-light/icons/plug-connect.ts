import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlugConnectIcon],svg[material-symbols-light-plug-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.77 19v-1.115H6.403q-1.002 0-1.703-.69T4 15.519V12.5H2v-1h2V8.48q0-.985.701-1.675t1.703-.69h1.365V5h1v14zm7.46 0v-3.712h-3.75v-1h3.75V9.712h-3.75v-1h3.75V5h1v1.116h1.366q1.002 0 1.703.69T20 8.48v3.02h2v1h-2v3.02q0 .985-.701 1.675t-1.703.69h-1.365V19z"></svg:path>`,
})
export class MaterialSymbolsLightPlugConnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
