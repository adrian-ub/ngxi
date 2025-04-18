import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCodeStudioIcon],svg[arcticons-code-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.205 8.609a4.853 4.853 0 0 0-4.853 4.852v5.687A4.853 4.853 0 0 1 5.5 24a4.853 4.853 0 0 1 4.852 4.853v5.686a4.853 4.853 0 0 0 4.853 4.853m17.59-30.783a4.853 4.853 0 0 1 4.853 4.852v5.687A4.853 4.853 0 0 0 42.5 24a4.853 4.853 0 0 0-4.852 4.853v5.686a4.853 4.853 0 0 1-4.853 4.853"></svg:path>`,
})
export class ArcticonsCodeStudioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
