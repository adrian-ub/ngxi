import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePuzzleIcon],svg[icon-park-twotone-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPuzzle0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M4 24V12h9v-2a6 6 0 0 1 12 0v2h9v12h4a6 6 0 0 1 0 12h-4v8H4v-8h4a6 6 0 0 0 0-12z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPuzzle0)"></svg:path>`,
})
export class IconParkTwotonePuzzleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
