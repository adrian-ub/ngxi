import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFormatUnderline16Icon],svg[qlementine-icons-format-underline-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a.5.5 0 0 1 .5.5v7c0 2.21-1.79 4-4 4s-4-1.79-4-4v-7a.5.5 0 0 1 1 0v7c0 1.66 1.34 3 3 3s3-1.34 3-3v-7a.5.5 0 0 1 .5-.5m1 13a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class QlementineIconsFormatUnderline16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
