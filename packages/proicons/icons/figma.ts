import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFigmaIcon],svg[proicons-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.833 5.833A3.083 3.083 0 0 1 8.917 2.75H12v6.167H8.917a3.083 3.083 0 0 1-3.084-3.084m12.334 0a3.083 3.083 0 0 0-3.084-3.083H12v6.167h3.083a3.083 3.083 0 0 0 3.084-3.084"></svg:path><svg:rect width="6.167" height="6.167" rx="3.083" transform="matrix(-1 0 0 1 18.167 8.917)"></svg:rect><svg:path d="M5.833 12a3.083 3.083 0 0 1 3.084-3.083H12v6.166H8.917A3.083 3.083 0 0 1 5.833 12"></svg:path><svg:path d="M5.833 18.167a3.083 3.083 0 0 1 3.084-3.084H12v3.084a3.083 3.083 0 0 1-3.083 3.083v0a3.083 3.083 0 0 1-3.084-3.083"></svg:path></svg:g>`,
})
export class ProiconsFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
