import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesExcludeSolidIcon],svg[bubbles-exclude-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.629 23.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v11.379a1.5 1.5 0 0 1-.439 1.06l-8.122 8.122a1.5 1.5 0 0 1-1.06.439m1.821-18.6a.75.75 0 0 1 .15 1.05l-5.309 7.078a2.25 2.25 0 0 1-3.317.312l-2.23-2.036a.75.75 0 1 1 1.012-1.108l2.23 2.036a.75.75 0 0 0 1.105-.104L14.4 4.8a.75.75 0 0 1 1.05-.15M14 15.1v5.4l6.5-6.5h-5.4a1.1 1.1 0 0 0-1.1 1.1" clip-rule="evenodd"></svg:path>`,
})
export class BubblesExcludeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
