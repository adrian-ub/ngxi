import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAppsIcon],svg[material-symbols-light-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19.23q-.508 0-.87-.36T4.77 18t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36t-.36-.87t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36t-.36-.87t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m-12-6q-.508 0-.87-.36T4.77 12t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36t-.36-.87t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36t-.36-.87t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m-12-6q-.508 0-.87-.36T4.77 6t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36T10.77 6t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36m6 0q-.508 0-.87-.36T16.77 6t.36-.87t.87-.36t.87.36t.36.87t-.36.87t-.87.36"></svg:path>`,
})
export class MaterialSymbolsLightAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
