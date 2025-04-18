import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTraccarclientIcon],svg[arcticons-traccarclient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.879 34.962a6.958 6.958 0 0 1-9.84-9.84l4.92 4.92Z"></svg:path><svg:circle cx="23.923" cy="24.077" r="1.193" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.303 17.539a6.96 6.96 0 0 1 4.158 4.158M28.682 11A13.92 13.92 0 0 1 37 19.318"></svg:path>`,
})
export class ArcticonsTraccarclientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
