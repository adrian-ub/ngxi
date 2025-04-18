import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiTeslaSentryIcon],svg[cbi-tesla-sentry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18.187A8.187 8.187 0 1 1 20.187 12A8.2 8.2 0 0 1 12 20.187M18.638 12A6.64 6.64 0 0 1 12 18.638A6.64 6.64 0 0 1 5.362 12A6.64 6.64 0 0 1 12 5.362A6.64 6.64 0 0 1 18.638 12"></svg:path>`,
})
export class CbiTeslaSentryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
