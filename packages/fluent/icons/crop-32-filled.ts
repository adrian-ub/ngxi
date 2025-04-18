import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrop32FilledIcon],svg[fluent-crop-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3.25a1.25 1.25 0 1 0-2.5 0V6.5H3.25a1.25 1.25 0 1 0 0 2.5H6.5v11.5a5 5 0 0 0 5 5H23v3.25a1.25 1.25 0 1 0 2.5 0V25.5h3.25a1.25 1.25 0 1 0 0-2.5H11.5A2.5 2.5 0 0 1 9 20.5zm14 8.25v10h2.5v-10a5 5 0 0 0-5-5h-10V9h10a2.5 2.5 0 0 1 2.5 2.5"></svg:path>`,
})
export class FluentCrop32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
