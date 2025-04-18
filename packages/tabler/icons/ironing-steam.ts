import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIroningSteamIcon],svg[tabler-ironing-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19v2M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865A1 1 0 0 1 19.82 16H3a7 7 0 0 1 7-7h9.8M8 19l-1 2m9-2l1 2"></svg:path>`,
})
export class TablerIroningSteamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
