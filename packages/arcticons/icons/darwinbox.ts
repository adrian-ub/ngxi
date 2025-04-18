import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDarwinboxIcon],svg[arcticons-darwinbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.926 5.5H9.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-1.264"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.528 32.759V8.866A3.366 3.366 0 0 1 32.894 5.5h.852m-4.219 17.041c0-3.306-2.704-6.01-6.01-6.01h0c-3.306 0-6.01 2.705-6.01 6.01v3.907c0 3.306 2.704 6.01 6.01 6.01h0c3.306 0 6.01-2.704 6.01-6.01"></svg:path>`,
})
export class ArcticonsDarwinboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
