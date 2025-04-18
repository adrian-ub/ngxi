import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMagnetOffIcon],svg[tabler-magnet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3a2 2 0 0 1 2 2m0 4v4a3 3 0 0 0 5.552 1.578M15 11V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a8 8 0 0 1-.424 2.577m-1.463 2.584A8 8 0 0 1 4 13V5c0-.297.065-.58.181-.833M4 8h4m7 0h4M3 3l18 18"></svg:path>`,
})
export class TablerMagnetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
