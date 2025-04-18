import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQmanagerIcon],svg[arcticons-qmanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.62 11.15h30.76v20H8.62Zm21 24.23h9.15a4.78 4.78 0 0 0 4.78-4.79V11.65a4.78 4.78 0 0 0-4.78-4.79H9.28a4.78 4.78 0 0 0-4.78 4.79v18.94a4.78 4.78 0 0 0 4.78 4.79h9.15v2.73h-3.58v3H33v-3h-3.43Z"></svg:path>`,
})
export class ArcticonsQmanagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
