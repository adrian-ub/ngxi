import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psQuoraIcon],svg[ps-quora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M316 390q44-27 70.5-74T413 214q0-86-60-147T208 6T63 67T3 214t60 146.5T208 421q26 0 48-6q35 64 112 49v-35q-40-11-52-39m-2-149q0 52-29 89q-40-44-102-41v41q30 1 51 37q-12 3-24 3q-44 0-74.5-37.5T105 241v-54q0-53 31-91t74-38t73.5 38t30.5 91z"></svg:path>`,
})
export class PsQuoraIcon {
  readonly viewBox = input("0 0 416 504")
  readonly width = input("0.83em")
  readonly height = input("1em")
}
