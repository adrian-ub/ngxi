import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LayersAltFillIcon],svg[f7-layers-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m45.031 36.5l4.255 1.804a2 2 0 0 1 0 3.392L34.36 48.025c-3.892 1.432-8.83 1.432-12.72 0L6.713 41.696a2 2 0 0 1 0-3.392l4.255-1.804l10.672 4.525c3.89 1.432 8.828 1.432 12.72 0zm0-12l4.255 1.804a2 2 0 0 1 0 3.392L34.36 36.025c-3.892 1.432-8.83 1.432-12.72 0L6.713 29.696a2 2 0 0 1 0-3.392l4.255-1.804l10.672 4.525c3.89 1.432 8.828 1.432 12.72 0zM34.36 7.975l14.926 6.329a2 2 0 0 1 0 3.392L34.36 24.025c-3.892 1.432-8.83 1.432-12.72 0L6.713 17.696a2 2 0 0 1 0-3.392L21.64 7.975c3.89-1.432 8.828-1.432 12.72 0"></svg:path>`,
})
export class F7LayersAltFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
