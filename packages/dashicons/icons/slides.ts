import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsSlidesIcon],svg[dashicons-slides-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14V6h10v8zm-3-1V7h2v6zm4-6v6h8V7zm10 0h2v6h-2zm-3 2V8H7v1zm0 3v-2H7v2z"></svg:path>`,
})
export class DashiconsSlidesIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
