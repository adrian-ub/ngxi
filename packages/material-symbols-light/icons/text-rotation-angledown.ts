import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextRotationAngledownIcon],svg[material-symbols-light-text-rotation-angledown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.577 20.5v-1h2.215l-9.8-9.8l.708-.708l9.8 9.8v-2.215h1V20.5zm4.235-5.858l-.735-.715l1.28-2.727l-3.284-3.284l-2.727 1.269l-.715-.735l10.046-4.504l.708.689zm-1.881-7.13l2.819 2.83l2.389-5.08l-.07-.07z"></svg:path>`,
})
export class MaterialSymbolsLightTextRotationAngledownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
