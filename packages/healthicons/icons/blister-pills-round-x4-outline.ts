import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBlisterPillsRoundX4OutlineIcon],svg[healthicons-blister-pills-round-x4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 24a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-11-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m13-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0M19 37a3 3 0 1 0 0-6a3 3 0 0 0 0 6m13-3a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill-rule="evenodd" d="M12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4zm2 0a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v15a1 1 0 1 0 0 2v15a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V25a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsBlisterPillsRoundX4OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
