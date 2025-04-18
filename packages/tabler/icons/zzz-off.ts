import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZzzOffIcon],svg[tabler-zzz-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h6l-6 8h6m4-16h6l-5.146 6.862M16 12h4M3 3l18 18"></svg:path>`,
})
export class TablerZzzOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
