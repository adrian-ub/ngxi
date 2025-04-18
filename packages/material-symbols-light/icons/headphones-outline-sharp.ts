import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHeadphonesOutlineSharpIcon],svg[material-symbols-light-headphones-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.077 20H4v-7.997q0-1.666.626-3.121T6.34 6.34t2.54-1.714T12 4t3.12.626t2.54 1.714t1.713 2.542t.626 3.121V20h-4.077v-6.154H19V12q0-2.925-2.037-4.962T12 5T7.038 7.038T5 12v1.846h3.077zm-1-5.154H5V19h2.077zm9.846 0V19H19v-4.154zm-9.846 0H5zm9.846 0H19z"></svg:path>`,
})
export class MaterialSymbolsLightHeadphonesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
