import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEnterpriseOutlineSharpIcon],svg[material-symbols-light-enterprise-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066T12 12t-1.066.434q-.434.433-.434 1.066t.434 1.066T12 15m-9 5V7h6V4h6v3h6v13zm1-1h16V8H4zm6-12h4V5h-4zM4 19V8z"></svg:path>`,
})
export class MaterialSymbolsLightEnterpriseOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
