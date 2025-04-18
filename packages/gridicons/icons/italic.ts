import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsItalicIcon],svg[gridicons-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.536 5l-.427 2h1.5L9.263 18h-1.5l-.427 2h6.128l.426-2h-1.5l2.347-11h1.5l.427-2z"></svg:path>`,
})
export class GridiconsItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
