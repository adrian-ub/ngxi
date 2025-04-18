import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLandslideIcon],svg[material-symbols-landslide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-4.25l4 1.3l11.025-3.675L22 22zm4-5.05L2 15.6v-1.85l4 1.3l6.9-2.3l2.55 1.025zM18.5 14l4.5-2V8l-4.5-1L16 9v3zM6 12.95L2 11.6V8h6l2.575 3.425zM12 8l5-2V1l-5-1l-3 2v4z"></svg:path>`,
})
export class MaterialSymbolsLandslideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
