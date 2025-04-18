import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoExclamationIcon],svg[tabler-photo-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 8h.01M15 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6"></svg:path><svg:path d="m3 16l5-5c.928-.893 2.072-.893 3 0l4 4"></svg:path><svg:path d="m14 14l1-1c.665-.64 1.44-.821 2.167-.545M19 16v3m0 3v.01"></svg:path></svg:g>`,
})
export class TablerPhotoExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
