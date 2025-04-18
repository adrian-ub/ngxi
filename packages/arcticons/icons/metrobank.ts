import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetrobankIcon],svg[arcticons-metrobank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.07 40.702l3.575-33.403H9.23L5.5 40.702Zm10.824 0l-6.144-13.65l1.747-16.194l4.435 9.26l5.85-12.82h7.057L42.5 40.701h-9.011L31.72 27.16Z"></svg:path>`,
})
export class ArcticonsMetrobankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
