import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feArtboardIcon],svg[fe-artboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 16V8H4a1 1 0 1 1 0-2h2V4a1 1 0 1 1 2 0v2h8V4a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v8h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H8v2a1 1 0 0 1-2 0v-2H4a1 1 0 0 1 0-2zm2 0h8V8H8z"></svg:path>`,
})
export class FeArtboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
