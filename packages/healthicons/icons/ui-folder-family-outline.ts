import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderFamilyOutlineIcon],svg[healthicons-ui-folder-family-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.5 24a3 3 0 1 1-6 0a3 3 0 0 1 6 0m14 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6M31 29a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3zm-17 0a3 3 0 0 0-3 3v2h9v-2a3 3 0 0 0-3-3zm12-2.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M24 30a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3"></svg:path><svg:path fill-rule="evenodd" d="M24.712 10.555L27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555M9 37a1 1 0 0 1-1-1V17h31a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm15.872-22l-1.913-3.482a1 1 0 0 0-.876-.518H9a1 1 0 0 0-1 1v3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiFolderFamilyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
