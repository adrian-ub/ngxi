import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPillarIcon],svg[mdi-pillar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h12a1 1 0 0 1 1 1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1a1 1 0 0 1 1-1m15-3v2H3V2zm-6 6h2v14h-2zM7 8h2v14H7zm4 0h2v14h-2z"></svg:path>`,
})
export class MdiPillarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
