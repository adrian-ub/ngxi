import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClubsIcon],svg[tabler-clubs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a4 4 0 0 1 3.164 6.447A4 4 0 1 1 14 15.645V17l1 4H9l1-4v-1.355a4 4 0 1 1-1.164-6.199A4 4 0 0 1 11.999 3z"></svg:path>`,
})
export class TablerClubsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
