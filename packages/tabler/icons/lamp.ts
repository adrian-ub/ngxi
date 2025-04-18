import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLampIcon],svg[tabler-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20h6m-3 0v-8m-7 0h14l-4-8H9z"></svg:path>`,
})
export class TablerLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
