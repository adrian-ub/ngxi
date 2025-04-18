import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSetEditIcon],svg[arcticons-set-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.216 3.5L18.21 8.672a15.8 15.8 0 0 0-4.6 2.647L8.64 9.606l-4.788 8.288l3.98 3.46a15 15 0 0 0 0 5.297l-3.98 3.459l4.789 8.284l4.964-1.71a15.6 15.6 0 0 0 4.605 2.643l1.005 5.173h9.569l.985-5.12a18 18 0 0 0 4.62-2.7l4.969 1.714l4.784-8.284l-3.976-3.463a14.8 14.8 0 0 0 0-5.289l3.98-3.467l-4.789-8.284l-4.964 1.71a15.7 15.7 0 0 0-4.605-2.643l-1.005-5.172Zm4.697 14.206a6.376 6.376 0 0 1 0 12.75h0a6.376 6.376 0 0 1-6.376-6.374v-.001a6.375 6.375 0 0 1 6.376-6.375"></svg:path>`,
})
export class ArcticonsSetEditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
