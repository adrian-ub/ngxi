import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPolarBeatIcon],svg[arcticons-polar-beat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 0 0 4.975 14H26a2.5 2.5 0 0 1 0 5H3.115a21.5 21.5 0 0 0-.615 5c0 11.874 9.626 21.5 21.5 21.5S45.5 35.874 45.5 24h0c0-11.874-9.626-21.5-21.5-21.5"></svg:path>`,
})
export class ArcticonsPolarBeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
