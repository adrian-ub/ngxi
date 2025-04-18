import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsBlockDefaultIcon],svg[dashicons-block-default-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6V4h-3v2H8V4H5v2H4c-.6 0-1 .4-1 1v8h14V7c0-.6-.4-1-1-1z"></svg:path>`,
})
export class DashiconsBlockDefaultIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
