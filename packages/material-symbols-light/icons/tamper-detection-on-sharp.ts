import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTamperDetectionOnSharpIcon],svg[material-symbols-light-tamper-detection-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.212 17.077V8.269H3.48V3.077h14v6.27l3.038-3.04v7.54l-3.038-3.04v6.27zM9.827 19H4.606L2 16.4l.708-.746l1.273 1.273V11.25h.885v3.058h.769v-4.27h.884v4.27h.77v-3.654h.884v3.654h.77v-2.846h.884z"></svg:path>`,
})
export class MaterialSymbolsLightTamperDetectionOnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
