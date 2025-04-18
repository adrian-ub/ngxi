import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePuzzleIcon],svg[icon-park-outline-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M4 24V12h9v-2a6 6 0 0 1 12 0v2h9v12h4a6 6 0 0 1 0 12h-4v8H4v-8h4a6 6 0 0 0 0-12z"></svg:path>`,
})
export class IconParkOutlinePuzzleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
