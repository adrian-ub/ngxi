import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRadiusTopLeftIcon],svg[tabler-radius-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19v-6a8 8 0 0 1 8-8h6"></svg:path>`,
})
export class TablerRadiusTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
