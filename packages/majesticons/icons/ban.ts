import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBanIcon],svg[majesticons-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm6 10c0 1.296-.41 2.496-1.11 3.476L8.524 7.11A6 6 0 0 1 18 12zM6 12c0-1.296.41-2.496 1.11-3.477l8.366 8.368A6 6 0 0 1 6 12z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsBanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
