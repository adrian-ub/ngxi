import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBriarIcon],svg[arcticons-briar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.32 28.09V8.5a3 3 0 0 0-3-3h-1.21a3 3 0 0 0-3 3v19.59Zm-7.21 7.22v4.19a3 3 0 0 0 3 3h1.21a3 3 0 0 0 3-3v-4.19ZM12.7 28.09H8.51a3 3 0 0 0-3 3v1.22a3 3 0 0 0 3 3h4.19Zm26.81 0H19.92v7.22h19.59a3 3 0 0 0 3-3v-1.22a3 3 0 0 0-3-3m-11.4-15.4H8.51a3 3 0 0 0-3 3v1.22a3 3 0 0 0 3 3h19.6Zm11.4 0h-4.19v7.22h4.19a3 3 0 0 0 3-3v-1.22a3 3 0 0 0-3-3"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.92 12.69V8.5a3 3 0 0 0-3-3H15.7a3 3 0 0 0-3 3v4.19Zm-7.22 7.22V39.5a3 3 0 0 0 3 3h1.22a3 3 0 0 0 3-3V19.91Z"></svg:path>`,
})
export class ArcticonsBriarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
