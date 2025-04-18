import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTextureIcon],svg[tabler-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3L3 6m18 12l-3 3M11 3l-8 8m13-8L3 16M21 3L3 21M21 8L8 21m13-8l-8 8"></svg:path>`,
})
export class TablerTextureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
