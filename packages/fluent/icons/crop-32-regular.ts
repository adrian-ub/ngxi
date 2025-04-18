import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrop32RegularIcon],svg[fluent-crop-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v11.5a4.5 4.5 0 0 0 4.5 4.5H23v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2H11.5A2.5 2.5 0 0 1 9 20.5zm14 8.5v10h2v-10A4.5 4.5 0 0 0 20.5 7h-10v2h10a2.5 2.5 0 0 1 2.5 2.5"></svg:path>`,
})
export class FluentCrop32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
