import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSosSharpIcon],svg[material-symbols-light-sos-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.192 16.116V7.885h5.616v8.23zm-6.923 0v-1h3.615V12.5H2.27V7.885h4.616v1H3.269V11.5h3.616v4.616zm14.846 0v-1h3.616V12.5h-3.616V7.885h4.616v1h-3.616V11.5h3.616v4.616zm-6.923-1h3.616V8.885h-3.616z"></svg:path>`,
})
export class MaterialSymbolsLightSosSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
