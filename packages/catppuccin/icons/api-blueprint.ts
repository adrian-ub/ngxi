import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinApiBlueprintIcon],svg[catppuccin-api-blueprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4.5-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-6.5 7l3-5.5m3 0l3 5.5"></svg:path>`,
})
export class CatppuccinApiBlueprintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
