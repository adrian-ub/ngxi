import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlokkIcon],svg[arcticons-blokk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.77 5.5H18.23a4.57 4.57 0 0 0-3.232 1.339l-8.16 8.16A4.57 4.57 0 0 0 5.5 18.23v11.54a4.57 4.57 0 0 0 1.339 3.232l8.16 8.16A4.57 4.57 0 0 0 18.23 42.5h11.54a4.57 4.57 0 0 0 3.232-1.339l8.159-8.16A4.57 4.57 0 0 0 42.5 29.77V18.23a4.57 4.57 0 0 0-1.339-3.232l-8.16-8.159A4.57 4.57 0 0 0 29.77 5.5"></svg:path>`,
})
export class ArcticonsBlokkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
