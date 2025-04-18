import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApps2orgIcon],svg[arcticons-apps2org-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.12 4.5a2 2 0 0 0-1.95 2v10.12l3.91 14v10.47c-.23 1.08 1.72 2.41 1.72 2.41h14.85a2 2 0 0 0 2-2V6.45a2 2 0 0 0-2-1.95zM8.4 35.7v5.85a2 2 0 0 0 1.95 2h5.85a2 2 0 0 0 1.95-2V35.7a2 2 0 0 0-1.95-2h-5.85a2 2 0 0 0-1.95 2m0-10.12v4.64A1.58 1.58 0 0 0 10 31.8h4.64a1.58 1.58 0 0 0 1.58-1.58v-4.64a1.58 1.58 0 0 0-1.6-1.58H10a1.58 1.58 0 0 0-1.6 1.58"></svg:path>`,
})
export class ArcticonsApps2orgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
