import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPanasonicDigaIcon],svg[arcticons-panasonic-diga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 31.426c17.863 0 38.213-1.91 39-8.052c0-2.621-5.101-7.128-30.334-6.781z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.633 21.751c.013 1.05-4.431 1.953-9.926 2.019h0c-5.495.066-9.96-.732-9.973-1.78c-.012-1.05 4.432-1.954 9.926-2.02h.001c5.495-.065 9.96.732 9.972 1.781"></svg:path>`,
})
export class ArcticonsPanasonicDigaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
