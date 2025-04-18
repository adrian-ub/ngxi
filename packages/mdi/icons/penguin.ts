import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPenguinIcon],svg[mdi-penguin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16c0 1.72-.63 3.3-1.66 4.5c.41.39.66.91.66 1.5H6c0-.59.25-1.11.66-1.5A6.9 6.9 0 0 1 5 16H3c0-1.25.57-2.36 1.46-3.09l.01-.02A6 6 0 0 0 7 8V7a5 5 0 0 1 5-5a5 5 0 0 1 5 5v1c0 2 1 3.81 2.53 4.89l.01.02c.89.73 1.46 1.84 1.46 3.09zm-3 0a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4m-6-7l2 1.5L14 9l-2-1.5zm0-4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiPenguinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
