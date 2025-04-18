import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarReel2LinearIcon],svg[solar-reel-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22h10"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"></svg:path><svg:path fill="currentColor" d="M19.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path></svg:g>`,
})
export class SolarReel2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
