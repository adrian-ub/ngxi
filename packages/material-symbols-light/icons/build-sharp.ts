import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBuildSharpIcon],svg[material-symbols-light-build-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.356 21.06l-7.102-7.114q-.558.258-1.138.406t-1.231.148q-2.289 0-3.894-1.606Q3.385 11.288 3.385 9q0-.65.144-1.251t.421-1.153l3.535 3.496L9.977 7.6L6.519 4.104q.552-.277 1.134-.44q.582-.164 1.232-.164q2.288 0 3.894 1.606T14.385 9q0 .69-.139 1.27q-.138.58-.415 1.1l7.113 7.101z"></svg:path>`,
})
export class MaterialSymbolsLightBuildSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
