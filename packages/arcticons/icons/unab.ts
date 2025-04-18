import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnabIcon],svg[arcticons-unab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="23.178" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="16.871" ry="18.678"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.444 36.78l-4.02 2.97l-.018 3.75m27.15-6.72l4.02 2.97l.018 3.75M14.409 17.953h4.737v10.845h-4.737zm14.444 0h4.737v10.845h-4.737zm-2.483 0l-2.354-2.385l-2.385 2.385V28.8h4.738Z"></svg:path>`,
})
export class ArcticonsUnabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
