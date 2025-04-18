import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLocationPinDisabledIcon],svg[streamline-location-pin-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.503.502l12.995 12.996M7.45 7.45a2 2 0 1 0-2.4-2.4"></svg:path><svg:path d="M2.678 2.678A5.4 5.4 0 0 1 7 .5c3.003 0 5.438 2.482 5.438 5.543c0 1.752-.838 3.302-1.857 4.538M1.776 4.5a5.7 5.7 0 0 0-.214 1.543c0 3.64 3.615 6.405 4.95 7.303c.298.2.678.2.976 0a16 16 0 0 0 1.758-1.376"></svg:path></svg:g>`,
})
export class StreamlineLocationPinDisabledIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
