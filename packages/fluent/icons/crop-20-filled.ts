import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrop20FilledIcon],svg[fluent-crop-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.75a.75.75 0 0 0-1.5 0V4.5H2.75a.75.75 0 0 0 0 1.5H4.5v6.75a2.75 2.75 0 0 0 2.75 2.75H14v1.75a.75.75 0 0 0 1.5 0V15.5h1.75a.75.75 0 0 0 0-1.5h-10C6.56 14 6 13.44 6 12.75zm8 4.5V13h1.5V7.25a2.75 2.75 0 0 0-2.75-2.75H7V6h5.75c.69 0 1.25.56 1.25 1.25"></svg:path>`,
})
export class FluentCrop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
