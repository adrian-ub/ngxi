import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidNotEqualIcon],svg[fa6-solid-not-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M369.8 37.4c14.7 9.8 18.7 29.7 8.9 44.4L337.1 144H400c17.7 0 32 14.3 32 32s-14.3 32-32 32H294.5l-64 96H400c17.7 0 32 14.3 32 32s-14.3 32-32 32H187.8l-65.2 97.7c-9.8 14.7-29.7 18.7-44.4 8.9s-18.7-29.7-8.9-44.4l41.6-62.2H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h105.5l64-96H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h212.2l65.2-97.7c9.8-14.7 29.7-18.7 44.4-8.9"></svg:path>`,
})
export class Fa6SolidNotEqualIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
