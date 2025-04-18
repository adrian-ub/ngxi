import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandPhpIcon],svg[tabler-brand-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 12a10 9 0 1 0 20 0a10 9 0 1 0-20 0"></svg:path><svg:path d="m5.5 15l.395-1.974L6.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H6m9.5 2l.395-1.974L16.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H16m-4-5.5L11 13m.6-3H14l-.5 3"></svg:path></svg:g>`,
})
export class TablerBrandPhpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
