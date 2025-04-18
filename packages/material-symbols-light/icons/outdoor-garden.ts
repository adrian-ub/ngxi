import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOutdoorGardenIcon],svg[material-symbols-light-outdoor-garden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.73 20.5h5V6.135l-2.5-2.5l-2.5 2.5zm5.77 0h5V6.135l-2.5-2.5l-2.5 2.5zm5.77 0h5V6.135l-2.5-2.5l-2.5 2.5z"></svg:path>`,
})
export class MaterialSymbolsLightOutdoorGardenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
