import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psLeftIcon],svg[ps-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181 384q7 0 15-4q17-17 2-30L60 192L196 36q15-13-2-30q-14-14-30 3L4 192l162 186q4 6 15 6"></svg:path>`,
})
export class PsLeftIcon {
  readonly viewBox = input("0 0 208 448")
  readonly width = input("0.47em")
  readonly height = input("1em")
}
