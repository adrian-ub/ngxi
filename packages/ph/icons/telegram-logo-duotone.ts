import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTelegramLogoDuotoneIcon],svg[ph-telegram-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M223.41 32.09L80 134.87L21 123.3a6.23 6.23 0 0 1-1-11.92l202.63-79.31a1 1 0 0 1 .78.02M80 200a8 8 0 0 0 13.76 5.56l30.61-31.76L80 134.87Z" opacity=".2"></svg:path><svg:path d="M228.88 26.19a9 9 0 0 0-9.16-1.57L17.06 103.93a14.22 14.22 0 0 0 2.43 27.21L72 141.45V200a15.92 15.92 0 0 0 10 14.83a15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L165 220a15.88 15.88 0 0 0 10.51 4a16.3 16.3 0 0 0 5-.79a15.85 15.85 0 0 0 10.67-11.63L231.77 35a9 9 0 0 0-2.89-8.81M78.15 126.35l-49.61-9.73l139.2-54.48ZM88 200v-47.48l24.79 21.74Zm87.53 8l-82.68-72.5l119-85.29Z"></svg:path></svg:g>`,
})
export class PhTelegramLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
