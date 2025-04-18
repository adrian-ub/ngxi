import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarouselHorizontalFilledIcon],svg[tabler-carousel-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m6 2a1 1 0 0 1 .117 1.993L22 8h-1v8h1a1 1 0 0 1 .117 1.993L22 18h-1a2 2 0 0 1-1.995-1.85L19 16V8a2 2 0 0 1 1.85-1.995L21 6zM3 6a2 2 0 0 1 1.995 1.85L5 8v8a2 2 0 0 1-1.85 1.995L3 18H2a1 1 0 0 1-.117-1.993L2 16h1V8H2a1 1 0 0 1-.117-1.993L2 6z"></svg:path>`,
})
export class TablerCarouselHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
