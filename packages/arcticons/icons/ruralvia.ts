import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRuralviaIcon],svg[arcticons-ruralvia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.241 7.632L24 12.378l4.759-4.746v13.349l7.498-7.498v7.244H43.5L28.335 35.892"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 20.727l11.275 11.275a11.83 11.83 0 0 1 3.466 8.366h9.518c0-6.318-2.51-12.378-6.978-16.847l-2.54-2.54l-7.498-7.498v7.244zM24 12.378v13.704"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 40.368a17.83 17.83 0 0 0-5.222-12.607l-7.035-7.034m24.514 0l-9.687 9.687M19.241 7.632v13.349"></svg:path>`,
})
export class ArcticonsRuralviaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
