import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKartenIcon],svg[arcticons-karten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.726 23.988a4.83 4.83 0 0 1 2.57-4.27a4.34 4.34 0 0 0 2.26-3.85V8.224A2.724 2.724 0 0 0 25.833 5.5H8.223A2.724 2.724 0 0 0 5.5 8.223v31.553A2.724 2.724 0 0 0 8.223 42.5h17.61a2.724 2.724 0 0 0 2.723-2.723v-7.669a4.34 4.34 0 0 0-2.26-3.85a4.83 4.83 0 0 1-2.57-4.27"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.864 41.574h1.016a2.724 2.724 0 0 0 2.724-2.723V9.149a2.724 2.724 0 0 0-2.724-2.723h-1.016m8.28 35.148h3.632a2.724 2.724 0 0 0 2.724-2.723V9.149a2.724 2.724 0 0 0-2.723-2.723h-3.633"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.512 41.574h3.632a2.724 2.724 0 0 0 2.724-2.723V9.149a2.724 2.724 0 0 0-2.724-2.723h-3.632"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.88 41.574h3.632a2.724 2.724 0 0 0 2.724-2.723V9.149a2.724 2.724 0 0 0-2.724-2.723H28.88"></svg:path>`,
})
export class ArcticonsKartenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
