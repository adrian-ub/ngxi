import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHSixBoldIcon],svg[ph-text-h-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m217.06 140.33l13.24-22.18a12 12 0 1 0-20.6-12.3l-32.25 54c-.09.15-.17.31-.25.47a40 40 0 1 0 39.86-20ZM212 196a16 16 0 1 1 16-16a16 16 0 0 1-16 16M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhTextHSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
