import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaClipboardFillIcon],svg[eva-clipboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"></svg:path><svg:rect width="10" height="6" x="7" y="2" fill="currentColor" rx="1" ry="1"></svg:rect>`,
})
export class EvaClipboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
