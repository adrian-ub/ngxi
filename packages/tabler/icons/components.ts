import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerComponentsIcon],svg[tabler-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 12l3 3l3-3l-3-3zm12 0l3 3l3-3l-3-3zM9 6l3 3l3-3l-3-3zm0 12l3 3l3-3l-3-3z"></svg:path>`,
})
export class TablerComponentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
