import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDescription28FilledIcon],svg[fluent-text-description-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 0 0 2h21.997a1 1 0 1 0 0-2zm0 15a1 1 0 1 0 0 2h14.997a1 1 0 1 0 0-2zm-1-9a1 1 0 0 1 1-1h21.997a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h21.997a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentTextDescription28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
