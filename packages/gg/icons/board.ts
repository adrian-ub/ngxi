import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBoardIcon],svg[gg-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm8 2h-4v12h4zm2 0v12h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM6 18h2V6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path>`,
})
export class GgBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
