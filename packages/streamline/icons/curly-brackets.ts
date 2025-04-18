import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCurlyBracketsIcon],svg[streamline-curly-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.977 1.125H5.59a1 1 0 0 0-1 1v2.77a2 2 0 0 1-.92 1.684l-.804.515l.803.515a2 2 0 0 1 .921 1.684v2.77a1 1 0 0 0 1 1h.386m2.39-11.938h.386a1 1 0 0 1 1 1v2.77a2 2 0 0 0 .92 1.684l.804.515l-.804.515a2 2 0 0 0-.92 1.684v2.77a1 1 0 0 1-1 1h-.386"></svg:path>`,
})
export class StreamlineCurlyBracketsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
