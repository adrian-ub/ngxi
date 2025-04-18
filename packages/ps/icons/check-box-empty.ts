import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psCheckBoxEmptyIcon],svg[ps-check-box-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237 341q28 0 46-18t18-46V107q0-28-18-46t-46-18H67q-28 0-46 18T3 107v170q0 28 18 46t46 18zM45 277V107q0-22 22-22h170q22 0 22 22v170q0 22-22 22H67q-22 0-22-22"></svg:path>`,
})
export class PsCheckBoxEmptyIcon {
  readonly viewBox = input("0 0 304 448")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
