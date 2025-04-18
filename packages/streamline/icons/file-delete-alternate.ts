import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFileDeleteAlternateIcon],svg[streamline-file-delete-alternate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7V1.5a1 1 0 0 1 1-1H10L13.5 4v8.5a1 1 0 0 1-1 1H8M4.74 9.26L.5 13.5m0-4.24l4.24 4.24"></svg:path>`,
})
export class StreamlineFileDeleteAlternateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
