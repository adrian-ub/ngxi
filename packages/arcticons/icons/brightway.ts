import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBrightwayIcon],svg[arcticons-brightway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.383 44.11c10.323-10.9 12.067-22.001 10.996-29.95c-.873-6.47-6.414-8.685-9.905-6.708s-5.824 7.023-2.124 14.467c4.38 8.809 11.124 13.765 22.406 18.606"></svg:path>`,
})
export class ArcticonsBrightwayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
