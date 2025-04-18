import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBitgetIcon],svg[arcticons-bitget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.643 5.5L7.667 17.47c-.72.72-.72 1.88 0 2.6l9.206 9.2h8.94l-10.07-10.067a.61.61 0 0 1 0-.866L28.586 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.357 42.5l11.976-11.97c.72-.72.72-1.88 0-2.6l-9.206-9.2h-8.94l10.07 10.067a.61.61 0 0 1 0 .866L19.414 42.5z"></svg:path>`,
})
export class ArcticonsBitgetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
