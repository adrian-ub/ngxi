import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesHyperlinkOutlineIcon],svg[bubbles-hyperlink-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.082 9.5A4.47 4.47 0 0 0 6.75 8h-1.5a4.5 4.5 0 0 0 0 9h1.5a4.47 4.47 0 0 0 3.332-1.5m3.836-6A4.47 4.47 0 0 1 17.25 8h1.5a4.5 4.5 0 0 1 0 9h-1.5a4.47 4.47 0 0 1-3.332-1.5M6.75 12.499h10.5"></svg:path>`,
})
export class BubblesHyperlinkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
