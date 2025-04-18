import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFigmaIcon],svg[streamline-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.536 2.759c0-1.11.899-2.009 2.008-2.009H7v4.018H4.544c-1.11 0-2.008-.9-2.008-2.01Zm8.928 0c0-1.11-.899-2.009-2.008-2.009H7v4.018h2.456c1.11 0 2.008-.9 2.008-2.01Z"></svg:path><svg:path d="M11.464 7A2.232 2.232 0 1 0 7 7a2.232 2.232 0 0 0 4.464 0m-8.928 4.241c0-1.11.899-2.009 2.008-2.009H7v1.786c0 1.233-1 2.232-2.232 2.232h-.224c-1.11 0-2.008-.9-2.008-2.009"></svg:path><svg:path d="M2.536 7c0-1.233.999-2.232 2.232-2.232H7v4.464H4.768c-1.233 0-2.232-1-2.232-2.232"></svg:path></svg:g>`,
})
export class StreamlineFigmaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
