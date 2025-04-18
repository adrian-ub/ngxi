import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psHandIcon],svg[ps-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 197v124q0 58 36.5 102t93.5 52q69 7 119-37.5T299 327V155q0-22-22-22q-9 0-15 6t-6 16v170q0 47-34.5 79T139 432q-42-4-69-36.5T43 321v-81q0-17-13-30T0 197M235 69q0-9-6-15t-16-6q-9 0-15 6t-6 15v192h43zm-64-42q0-22-22-22q-9 0-15 6t-6 16v234h43zm-64 64q0-22-22-22q-9 0-15 6t-6 16v170h43z"></svg:path>`,
})
export class PsHandIcon {
  readonly viewBox = input("0 0 304 496")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
