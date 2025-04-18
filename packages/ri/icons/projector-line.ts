import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riProjectorLineIcon],svg[ri-projector-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.126 9H4v7h16v-7h-1.126a4.002 4.002 0 0 1-7.748 0m0-2a4.002 4.002 0 0 1 7.748 0H20V5H4v5zM15 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-9 2h2v2H6z"></svg:path>`,
})
export class RiProjectorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
