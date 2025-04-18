import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOilBarrelSharpIcon],svg[material-symbols-light-oil-barrel-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.98 20v-1h1.712v-6.5H3.981v-1h1.711V5H3.981V4H20v1h-1.692v6.5H20v1h-1.692V19H20v1zm8.018-4.634q1.04 0 1.771-.72q.731-.718.731-1.74q0-.812-.469-1.395T12 9.116q-1.548 1.803-2.024 2.395t-.476 1.4q0 1.018.729 1.736q.728.719 1.769.719"></svg:path>`,
})
export class MaterialSymbolsLightOilBarrelSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
