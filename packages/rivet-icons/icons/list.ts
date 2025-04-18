import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsListIcon],svg[rivet-icons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3 1h11V2H4zm11 5H4V7h11zM1 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0m14 6H4v-2h11zM1 13a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class RivetIconsListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
