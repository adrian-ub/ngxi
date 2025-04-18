import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSendEurosIcon],svg[iconoir-send-euros-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 12h8m0 0l-3.84-4M21 12l-3.84 4M11 7.503A4.75 4.75 0 0 0 8.87 7C6.18 7 4 9.239 4 12s2.18 5 4.87 5a4.7 4.7 0 0 0 2.13-.503M3 11h6m-6 2h6"></svg:path>`,
})
export class IconoirSendEurosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
