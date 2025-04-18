import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerComponentsOffIcon],svg[tabler-components-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 12l3 3l3-3l-3-3zm15.5 2.5L21 12l-3-3l-2.5 2.5m-3.001-2.999L15 6l-3-3l-2.5 2.5M9 18l3 3l3-3l-3-3zM3 3l18 18"></svg:path>`,
})
export class TablerComponentsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
