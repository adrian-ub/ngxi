import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWdbibleIcon],svg[arcticons-wdbible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 17.9c-5.44 7.36-12.9 14.71-22.09 14.71c-6.53 0-12.24-4.11-16.91-8.61c4.67-4.5 10.38-8.61 16.91-8.61c9.19 0 16.65 7.35 22.09 14.71"></svg:path>`,
})
export class ArcticonsWdbibleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
