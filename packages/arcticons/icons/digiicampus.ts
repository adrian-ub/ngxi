import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDigiicampusIcon],svg[arcticons-digiicampus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 7.5v33a2 2 0 0 0 2 2h16.057c10.031 0 18.575-7.8 18.931-17.825C42.862 14.15 34.441 5.5 24 5.5H7.5a2 2 0 0 0-2 2"></svg:path>`,
})
export class ArcticonsDigiicampusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
