import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCoctailOffIcon],svg[pepicons-pop-coctail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="m2.767 5.68l6.5 7a1 1 0 0 0 1.466 0l6.5-7c.594-.64.14-1.68-.733-1.68h-13c-.873 0-1.327 1.04-.733 1.68m11.44.32L10 10.53L5.793 6z" clip-rule="evenodd"></svg:path><svg:path d="M11 11.5v7H9v-7z"></svg:path><svg:path d="M14.5 20h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5M12.818 1.728a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 0 1-.364 1.456z"></svg:path><svg:path d="M11.212 8.737a.75.75 0 1 1-1.424-.474l2.5-7.5a.75.75 0 1 1 1.423.474z"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCoctailOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
