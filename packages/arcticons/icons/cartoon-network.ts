import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCartoonNetworkIcon],svg[arcticons-cartoon-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.132 30.753V17.247L42.5 30.753V17.247m-22.158 8.977v.055a4.474 4.474 0 0 1-4.474 4.474h0a4.474 4.474 0 0 1-4.474-4.474v-4.558a4.474 4.474 0 0 1 4.474-4.474h0a4.474 4.474 0 0 1 4.474 4.474v.055"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 13.632h20.736v20.736H5.5z"></svg:path>`,
})
export class ArcticonsCartoonNetworkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
