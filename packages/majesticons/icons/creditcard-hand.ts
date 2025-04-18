import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardHandIcon],svg[majesticons-creditcard-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 13V5a2 2 0 0 0-2-2h-2m0 0H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M13 3v10.5M9 7v3"></svg:path><svg:path fill="currentColor" d="M18.948 9.95L16.998 8v6.587c0 .89-1.077 1.337-1.707.707L13.996 14c-.5-.5-1.701-.8-2.502 0s-.5 2 0 2.5l4.918 4.915a2 2 0 0 0 1.414.585H20a1 1 0 0 0 1-1v-6.1a7 7 0 0 0-2.052-4.95"></svg:path></svg:g>`,
})
export class MajesticonsCreditcardHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
