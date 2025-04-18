import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagCoteDivoireIcon],svg[twemoji-flag-cote-divoire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F77F00" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"></svg:path><svg:path fill="#EEE" d="M12 5h12v26H12z"></svg:path><svg:path fill="#009E60" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path>`,
})
export class TwemojiFlagCoteDivoireIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
