import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextRotationAngleupIcon],svg[material-symbols-text-rotation-angleup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.725 21.7l-1.4-1.4l9.3-9.3h-1.6V9h5v5h-2v-1.6zm-1.5-5.6L3.375 5.4l1.4-1.4l10.7 4.9l-1.35 1.35l-2.65-1.3l-3.15 3.15l1.25 2.65zm-.65-5.55l2.35-2.3l-4.35-2.1l-.05.05z"></svg:path>`,
})
export class MaterialSymbolsTextRotationAngleupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
