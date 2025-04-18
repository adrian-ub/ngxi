import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feWatchAltIcon],svg[fe-watch-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 6h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM8 8v8h8V8z"></svg:path>`,
})
export class FeWatchAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
