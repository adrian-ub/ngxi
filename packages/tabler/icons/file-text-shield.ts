import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileTextShieldIcon],svg[tabler-file-text-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 3v4a.997.997 0 0 0 1 1h4"></svg:path><svg:path d="M11 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v3.5M8 9h1m-1 3.994h3m-3 4.003h2"></svg:path><svg:path d="M21 15.994c0 4-2.5 6-3.5 6s-3.5-2-3.5-6c1 0 2.5-.5 3.5-1.5c1 1 2.5 1.5 3.5 1.5"></svg:path></svg:g>`,
})
export class TablerFileTextShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
