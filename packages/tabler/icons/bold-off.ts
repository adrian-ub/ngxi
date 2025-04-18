import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoldOffIcon],svg[tabler-bold-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204M12 12H7V7m10.107 10.112A3.5 3.5 0 0 1 14 19H7v-7M3 3l18 18"></svg:path>`,
})
export class TablerBoldOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
