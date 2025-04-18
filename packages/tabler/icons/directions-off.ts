import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDirectionsOffIcon],svg[tabler-directions-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-4m0-4v-1m0-7V3m-2 18h4M8 8v1h1m4 0h6l2-2l-2-2H9m5 9v3H6l-2-2l2-2h7M3 3l18 18"></svg:path>`,
})
export class TablerDirectionsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
