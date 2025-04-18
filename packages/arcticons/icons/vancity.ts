import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVancityIcon],svg[arcticons-vancity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.336 43.5c10.988-9.99 13.32-25.855 13.32-39h-8.818c0 10.977-1.191 22.5-7.838 30.558C17.354 27 16.162 15.478 16.162 4.5H7.345c0 13.145 2.33 29.01 13.32 39z"></svg:path>`,
})
export class ArcticonsVancityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
