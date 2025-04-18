import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderFamilyNegativeIcon],svg[healthicons-ui-folder-family-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsUiFolderFamilyNegative0)"><svg:path d="m24.872 15l-1.913-3.482a1 1 0 0 0-.876-.518H9a1 1 0 0 0-1 1v3zM12.5 25a3 3 0 1 1 6 0a3 3 0 0 1-6 0m20 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6M28 33a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm-17 0a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2h-9zm13-3.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4M21 34a3 3 0 1 1 6 0v1h-6z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zm-9 15a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555L27.154 15z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiFolderFamilyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiFolderFamilyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
