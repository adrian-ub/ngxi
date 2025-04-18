import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStep20RegularIcon],svg[fluent-step-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4V8a1 1 0 0 1 1-1h4zm5 0h-4v4a1 1 0 0 1-1 1H8v4a1 1 0 0 1-1 1H3v4h12a2 2 0 0 0 2-2z"></svg:path>`,
})
export class FluentStep20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
