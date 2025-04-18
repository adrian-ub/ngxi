import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDigitalWellbeingIcon],svg[arcticons-digital-wellbeing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.105 40.226A21.5 21.5 0 1 1 20.637 2.765m5.983-.105a21.5 21.5 0 0 1 15.204 33.363"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 18.248c-3.464-10.938-21.931 2.46 0 15.534m0-15.534c3.464-10.938 21.931 2.46 0 15.534"></svg:path>`,
})
export class ArcticonsDigitalWellbeingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
