import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEightTrackIcon],svg[mdi-eight-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2L5 5v11l1 4c.27 1.07.9 2 2 2h8a2 2 0 0 0 2-2l1-4V5l-2-3h-2v1h-2V2zm0 4h10v10H7z"></svg:path>`,
})
export class MdiEightTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
