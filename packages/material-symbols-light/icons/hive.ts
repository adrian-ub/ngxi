import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHiveIcon],svg[material-symbols-light-hive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.948 11.616L14.325 8.71l1.623-2.903h3.196l1.623 2.903l-1.623 2.904zm-5.546 3.288L8.779 12l1.623-2.904h3.196L15.221 12l-1.623 2.904zm0-6.596L8.779 5.404L10.402 2.5h3.196l1.623 2.904l-1.623 2.904zm-5.546 3.308L3.233 8.712l1.623-2.904h3.196l1.606 2.904l-1.606 2.904zm0 6.576L3.233 15.29l1.623-2.904h3.196l1.606 2.904l-1.606 2.903zm5.569 3.308l-1.646-2.904l1.623-2.904h3.196l1.623 2.904l-1.623 2.904zm5.523-3.308l-1.623-2.904l1.623-2.904h3.196l1.623 2.904l-1.623 2.904z"></svg:path>`,
})
export class MaterialSymbolsLightHiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
