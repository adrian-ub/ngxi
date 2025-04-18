import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsHandStopIcon],svg[zondicons-hand-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4.01V4a1 1 0 0 1 1-1a1 1 0 0 1 1 1v6h1V2a1 1 0 0 1 1-1a1 1 0 0 1 1 1v8h1V1a1 1 0 1 1 2 0v9h1V2a1 1 0 0 1 1-1a1 1 0 0 1 1 1v13h1V9a1 1 0 0 1 1-1h1z"></svg:path>`,
})
export class ZondiconsHandStopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
