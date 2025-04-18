import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWorkspacesIcon],svg[material-symbols-workspaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21q-1.65 0-2.825-1.175T2 17t1.175-2.825T6 13t2.825 1.175T10 17t-1.175 2.825T6 21m12 0q-1.65 0-2.825-1.175T14 17t1.175-2.825T18 13t2.825 1.175T22 17t-1.175 2.825T18 21m-6-10q-1.65 0-2.825-1.175T8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11"></svg:path>`,
})
export class MaterialSymbolsWorkspacesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
