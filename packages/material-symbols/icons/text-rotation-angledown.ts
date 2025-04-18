import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextRotationAngledownIcon],svg[material-symbols-text-rotation-angledown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21v-2h1.6L2.3 9.7l1.4-1.4l9.3 9.3V16h2v5zm5.1-5.55l-1.35-1.35l1.3-2.65L11.9 8.3L9.25 9.55L7.9 8.2l10.7-4.85l1.4 1.4zm-1.65-7.9l2.3 2.35l2.1-4.35l-.05-.05z"></svg:path>`,
})
export class MaterialSymbolsTextRotationAngledownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
