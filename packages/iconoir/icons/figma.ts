import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFigmaIcon],svg[iconoir-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3m6-3h3a3 3 0 0 1 0 6h-3z"></svg:path><svg:path d="M12 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-6 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0m0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3"></svg:path></svg:g>`,
})
export class IconoirFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
