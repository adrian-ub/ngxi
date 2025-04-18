import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashOffOutlineIcon],svg[material-symbols-flash-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10l-2 7h4l-2.925 4.225L14.65 11.8l.55-.8h-1.35l-1.175-1.175L14.35 4H9v2.15l-2-2zm3 20v-8H7V9.85L1.375 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L13.75 16.6zm1.825-13.025"></svg:path>`,
})
export class MaterialSymbolsFlashOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
