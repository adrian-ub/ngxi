import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGolfOffIcon],svg[tabler-golf-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18v-6m0-4V3l7 4l-5.07 2.897M9 17.67c-.62.36-1 .82-1 1.33c0 1.1 1.8 2 4 2s4-.9 4-2c0-.5-.38-.97-1-1.33M3 3l18 18"></svg:path>`,
})
export class TablerGolfOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
