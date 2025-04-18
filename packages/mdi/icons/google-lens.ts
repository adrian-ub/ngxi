import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleLensIcon],svg[mdi-google-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a4 4 0 0 1 4 4v6h-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m6 6a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m6 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiGoogleLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
