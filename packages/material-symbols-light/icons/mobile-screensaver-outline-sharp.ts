import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileScreensaverOutlineSharpIcon],svg[material-symbols-light-mobile-screensaver-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm1.5-6.23h7.077l-2.144-2.886l-1.894 2.5l-1.395-1.844zm6.309-4.616q.328 0 .548-.222t.22-.549t-.221-.548t-.55-.22t-.547.222t-.22.549t.221.548t.549.22M7 21V3z"></svg:path>`,
})
export class MaterialSymbolsLightMobileScreensaverOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
