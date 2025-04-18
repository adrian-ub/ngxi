import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTrophyIcon],svg[grommet-icons-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 15a6 6 0 0 1-6-6V1h12v8a6 6 0 0 1-6 6ZM6 3H1v4c0 2.509 1.791 4 4 4h1zm12 8h1c2.209 0 4-1.491 4-4V3h-5zM5 23h14v-4H5zm11-4a4 4 0 1 0-8 0"></svg:path>`,
})
export class GrommetIconsTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
