import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationAngleUpIcon],svg[mdi-format-text-rotation-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.58 9.33v4.22l-1.41-1.41L10.31 21l-1.4-1.41l8.81-8.86l-1.41-1.4M7.59 11l2.63-2.61l-4.88-2.25M4.5 4.22l11.11 4.41l-1.45 1.5l-2.2-.94l-3.57 3.56l.94 2.16l-1.5 1.5L3.42 5.25Z"></svg:path>`,
})
export class MdiFormatTextRotationAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
