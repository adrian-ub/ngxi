import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsForerkortIcon],svg[arcticons-forerkort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 36.5v-25a3 3 0 0 0-3-3h-33a3 3 0 0 0-3 3v25a3 3 0 0 0 3 3h33a3 3 0 0 0 3-3m-19.173-19h14.77m-14.77 6.252h14.77m-14.77 6.253h14.77"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.558 30.005H9.14s-.276-5.49 5.21-5.49c5.461 0 5.21 5.49 5.21 5.49z"></svg:path><svg:circle cx="14.349" cy="20.069" r="2.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsForerkortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
