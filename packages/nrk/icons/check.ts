import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCheckIcon],svg[nrk-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.707 7.707L9.305 18.11l-4.882-5.634l1.511-1.31l3.476 4.01l8.883-8.883z"></svg:path>`,
})
export class NrkCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
