import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFortranIcon],svg[material-icon-theme-fortran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="M6 4v2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6v2h12v-2h-3a1 1 0 0 1-1-1v-9h4a2 2 0 0 1 2 2v2h2V10h-2v2a2 2 0 0 1-2 2h-4V6h6a4 4 0 0 1 4 4h2V4Z"></svg:path>`,
})
export class MaterialIconThemeFortranIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
