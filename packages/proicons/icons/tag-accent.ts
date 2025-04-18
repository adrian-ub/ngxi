import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTagAccentIcon],svg[proicons-tag-accent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.162 10.925L13.716 4.48a2.5 2.5 0 0 0-1.767-.732h-5.2a3 3 0 0 0-3 3v5.2a2.5 2.5 0 0 0 .731 1.768l6.445 6.446a4 4 0 0 0 5.657 0l3.58-3.58a4 4 0 0 0 0-5.657"></svg:path>`,
})
export class ProiconsTagAccentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
