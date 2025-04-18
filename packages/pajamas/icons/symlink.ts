import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSymlinkIcon],svg[pajamas-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12V9H6a3 3 0 0 0-3 3v2a5 5 0 0 1 3-9h4V2l5 5z"></svg:path>`,
})
export class PajamasSymlinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
