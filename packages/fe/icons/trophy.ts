import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTrophyIcon],svg[fe-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.207 9H6a2 2 0 1 1 0-4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a2 2 0 1 1 0 4h-.207A5.5 5.5 0 0 1 13 12.978V17h1a2 2 0 0 1 2 2v1h1a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h1v-1a2 2 0 0 1 2-2h1v-4.022A5.5 5.5 0 0 1 6.207 9M8 4v3.5a3.5 3.5 0 0 0 3.5 3.5h1A3.5 3.5 0 0 0 16 7.5V4z"></svg:path>`,
})
export class FeTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
