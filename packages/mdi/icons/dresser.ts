import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDresserIcon],svg[mdi-dresser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3c-1.1 0-2 .9-2 2v3h20V5a2 2 0 0 0-2-2zm6 2h4v1h-4zM2 9v5h20V9zm8 2h4v1h-4zm-8 4v3a2 2 0 0 0 2 2v1h2v-1h12v1h2v-1c1.11 0 2-.89 2-2v-3zm8 2h4v1h-4z"></svg:path>`,
})
export class MdiDresserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
