import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feMentionIcon],svg[fe-mention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12a3.5 3.5 0 0 1-5.909 2.539A4 4 0 1 1 14 8.535V8h2v4a1.5 1.5 0 0 0 3 0a7 7 0 1 0-3.392 6h3.1A9 9 0 1 1 21 12m-9 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class FeMentionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
