import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPortraitIcon],svg[tdesign-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zm-3 6.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m2.665 3.769a3.5 3.5 0 1 0-5.33 0A5 5 0 0 0 7 16.5v1h2v-1a3 3 0 1 1 6 0v1h2v-1a5 5 0 0 0-2.335-4.231M4 15v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"></svg:path>`,
})
export class TdesignPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
