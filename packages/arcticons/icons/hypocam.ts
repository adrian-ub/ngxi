import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHypocamIcon],svg[arcticons-hypocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 21.813h4.375v4.375H6.5zm4.375 0h4.375v4.375h-4.375zm4.375 0h4.375v4.375H15.25zm4.375 0H24v4.375h-4.375zm4.375 0h4.375v4.375H24zm4.375 0h4.375v4.375h-4.375zm4.375 0h4.375v4.375H32.75zm4.375 0H41.5v4.375h-4.375z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsHypocamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
