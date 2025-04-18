import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBabelioIcon],svg[simple-icons-babelio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.283 0a14 14 0 0 1-6.566 7.588v4.691a20.5 20.5 0 0 0 6.566-3.676zm3.283 7.7a22.12 22.12 0 0 1-13.132 7.03v4.213a36 36 0 0 0 3.836-.564a35.1 35.1 0 0 0 9.296-3.322zm3.282 7.331a36.75 36.75 0 0 1-19.696 5.686V24h19.696Z"></svg:path>`,
})
export class SimpleIconsBabelioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
