import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAccessibilityIcon],svg[material-symbols-light-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.77q-.698 0-1.195-.498q-.497-.497-.497-1.195t.497-1.195T12 2.384t1.195.498t.497 1.195t-.497 1.195T12 5.769M9.808 21.5V8.423H3.962v-1h16.077v1h-5.847V21.5h-1V16h-2.384v5.5z"></svg:path>`,
})
export class MaterialSymbolsLightAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
