import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeedCameraOutlineSharpIcon],svg[material-symbols-light-speed-camera-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.467 14.27l-1.213-.693l2.558-1.87L20 12.4zm-4.013-1.609l3.292-2.397l-8.054-4.456l-1.884 3.177zM5 19v-1h4.808v-6.22l-4.38-2.436l2.866-4.857l10.27 5.692l-5.043 3.665l-2.733-1.503V19zm6.777-9.775"></svg:path>`,
})
export class MaterialSymbolsLightSpeedCameraOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
