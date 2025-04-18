import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIcons3dPrintIcon],svg[eos-icons-3d-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zm0-2H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M18 17H6v2h12zm-5 2h-2v3h2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.327 7.089L9.272 7H2V5h7.266A2 2 0 0 1 11 4h2a2 2 0 0 1 1.731 1H23v2h-8.272a2 2 0 0 1-1.186.916L12 11l-1.542-3.084a2 2 0 0 1-1.131-.827M12 7h-1.004h2.008zm1-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class EosIcons3dPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
