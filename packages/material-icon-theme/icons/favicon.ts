import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFaviconIcon],svg[material-icon-theme-favicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffd54f" d="m16 24l10 6l-4-10l8-8l-10-.032L16 2l-4 10H2l8 8l-4 10Z"></svg:path>`,
})
export class MaterialIconThemeFaviconIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
