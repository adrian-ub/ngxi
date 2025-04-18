import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLineEndArrowOutlineIcon],svg[material-symbols-line-end-arrow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-6H2v-2h9V5l11 7zm2-3.65L18.275 12L13 8.65zM13 12"></svg:path>`,
})
export class MaterialSymbolsLineEndArrowOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
