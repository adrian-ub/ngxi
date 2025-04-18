import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHandPointingRightIcon],svg[mdi-hand-pointing-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-4.47l-.13 1.21l-2.2 4.94c-.2.5-.73.85-1.34.85H8.5c-.8 0-1.5-.73-1.5-1.5V10c0-.39.16-.74.43-1l4.2-4.9l.77.74c.2.19.32.45.32.74l-.03.22L11 9zM2 18v-8h3v8z"></svg:path>`,
})
export class MdiHandPointingRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
