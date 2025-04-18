import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRedo48RegularIcon],svg[fluent-arrow-redo-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.15 9.84c4.174-4.602 11.303-4.505 15.855.67l.017.02l8.559 8.958H24.2a1.25 1.25 0 0 0 0 2.5h15.545c.69 0 1.25-.56 1.25-1.25V5.268a1.25 1.25 0 0 0-2.5 0v12.606l-8.631-9.035c-5.45-6.174-14.307-6.478-19.567-.679c-5.24 5.778-3.622 13.316.014 17.195l.01.01l8.979 9.173l.005.005l8.75 8.837l.004.004l.25.25a1.25 1.25 0 1 0 1.769-1.767l-.247-.246l-.004-.005l-8.74-8.827l-.006-.005l-8.955-9.148c-2.918-3.124-4.172-9.17.023-13.796"></svg:path>`,
})
export class FluentArrowRedo48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
