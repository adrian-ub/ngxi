import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideoCallSharpIcon],svg[material-symbols-light-video-call-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.98 15.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM3.48 19V5h14v6.27l3.04-3.04v7.54l-3.04-3.04V19z"></svg:path>`,
})
export class MaterialSymbolsLightVideoCallSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
