import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMissedVideoCallOutlineSharpIcon],svg[material-symbols-light-missed-video-call-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.48 19V5h14v6.27l3.04-3.04v7.54l-3.04-3.04V19zm1-1h12V6h-12zm0 0V6zm6.74-2.692l3.807-3.858l-.708-.708l-3.1 3.139l-3.43-3.42h2.269v-1h-4v4h1v-2.315z"></svg:path>`,
})
export class MaterialSymbolsLightMissedVideoCallOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
