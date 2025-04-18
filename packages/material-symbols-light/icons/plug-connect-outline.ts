import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlugConnectOutlineIcon],svg[material-symbols-light-plug-connect-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.77 19v-1.115H6.403q-1.002 0-1.703-.69T4 15.519V12.5H2v-1h2V8.48q0-.985.701-1.675t1.703-.69h1.365V5h1v14zm-1.366-2.116h1.365V7.116H6.404q-.597 0-1 .402Q5 7.921 5 8.481v7.038q0 .56.404.963q.403.403 1 .403M15.23 19v-3.712h-3.75v-1h3.75V9.712h-3.75v-1h3.75V5h1v1.116h1.365q1.002 0 1.703.69T20 8.48v3.02h2v1h-2v3.02q0 .985-.701 1.675t-1.703.69h-1.365V19zm1-2.116h1.365q.597 0 1-.402q.404-.403.404-.963V8.481q0-.56-.403-.963q-.404-.402-1-.402H16.23zm0-4.884"></svg:path>`,
})
export class MaterialSymbolsLightPlugConnectOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
