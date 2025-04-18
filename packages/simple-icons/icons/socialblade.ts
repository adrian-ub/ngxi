import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSocialbladeIcon],svg[simple-icons-socialblade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.323 16.688H0v1.893h2.323zm3.612-3.097H3.613v4.99h2.322zm3.613 1.205H7.226v3.785h2.322zm3.613-.861H10.84v4.646h2.322zm3.613-1.892h-2.322v6.538h2.322zm3.613-1.978h-2.323v8.516h2.323zM24 5.42h-2.323v13.16H24z"></svg:path>`,
})
export class SimpleIconsSocialbladeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
