import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRowChild20RegularIcon],svg[fluent-row-child-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6v3a2 2 0 0 0 2 2h2v-1a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2H8a3 3 0 0 1-3-3V9a2 2 0 0 1-2-2zm8 10a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1zm4-7a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z"></svg:path>`,
})
export class FluentRowChild20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
