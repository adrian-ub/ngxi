import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsToDoListIcon],svg[arcticons-to-do-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 26.059l13.717 13.619L43.5 15.21l-6.11-6.888l-19.173 18.982l-7.328-7.25z"></svg:path>`,
})
export class ArcticonsToDoListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
