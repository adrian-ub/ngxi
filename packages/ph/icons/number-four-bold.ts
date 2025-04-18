import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberFourBoldIcon],svg[ph-number-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 156h-12V48a12 12 0 0 0-21.37-7.5l-96 120A12 12 0 0 0 64 180h84v28a12 12 0 0 0 24 0v-28h12a12 12 0 0 0 0-24m-36 0H89l59-73.79Z"></svg:path>`,
})
export class PhNumberFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
