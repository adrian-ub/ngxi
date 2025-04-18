import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAsteriskSimpleFillIcon],svg[ph-asterisk-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m63.34 91.83l-50.4 16.38l31.15 42.87a8 8 0 1 1-12.94 9.4L128 141.61l-31.15 42.87a8 8 0 0 1-12.94-9.4l31.15-42.87l-50.4-16.38a8 8 0 0 1 4.94-15.22L120 117V64a8 8 0 0 1 16 0v53l50.4-16.38a8 8 0 0 1 4.94 15.22Z"></svg:path>`,
})
export class PhAsteriskSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
