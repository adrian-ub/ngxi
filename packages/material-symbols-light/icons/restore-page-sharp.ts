import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRestorePageSharpIcon],svg[material-symbols-light-restore-page-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.135q1.72 0 2.927-1.208T16.135 13t-1.208-2.927T12 8.866q-1.065 0-1.852.465t-1.321 1.065V8.692h-.885v3.25h3.25v-.884H9.431q.386-.547 1.063-.927T12 9.75q1.35 0 2.3.95t.95 2.3t-.95 2.3t-2.3.95q-1.1 0-1.925-.638T8.9 14h-.935q.408 1.452 1.513 2.293t2.522.842M5 21V3h8.577L19 8.423V21z"></svg:path>`,
})
export class MaterialSymbolsLightRestorePageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
