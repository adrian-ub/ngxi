import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSquare3Stack3d16SolidIcon],svg[heroicons-square-3-stack-3d-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.628 1.099a.75.75 0 0 1 .744 0l5.25 3a.75.75 0 0 1 0 1.302l-5.25 3a.75.75 0 0 1-.744 0l-5.25-3a.75.75 0 0 1 0-1.302z"></svg:path><svg:path fill="currentColor" d="m2.57 7.24l-.192.11a.75.75 0 0 0 0 1.302l5.25 3a.75.75 0 0 0 .744 0l5.25-3a.75.75 0 0 0 0-1.303l-.192-.11l-4.314 2.465a2.25 2.25 0 0 1-2.232 0z"></svg:path><svg:path fill="currentColor" d="m2.378 10.6l.192-.11l4.314 2.464a2.25 2.25 0 0 0 2.232 0l4.314-2.465l.192.11a.75.75 0 0 1 0 1.303l-5.25 3a.75.75 0 0 1-.744 0l-5.25-3a.75.75 0 0 1 0-1.303"></svg:path>`,
})
export class HeroiconsSquare3Stack3d16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
