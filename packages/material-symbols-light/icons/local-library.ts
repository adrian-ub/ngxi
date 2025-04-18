import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalLibraryIcon],svg[material-symbols-light-local-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.116q-1.684-1.374-3.721-2.168T4 18V8.654q2.294.135 4.36 1.095q2.065.96 3.64 2.378q1.575-1.418 3.64-2.378T20 8.654V18q-2.248.154-4.282.948T12 21.116m0-12.539q-1.342 0-2.286-.944t-.945-2.287t.944-2.287T12 2.116t2.286.944t.945 2.286t-.944 2.287T12 8.577"></svg:path>`,
})
export class MaterialSymbolsLightLocalLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
