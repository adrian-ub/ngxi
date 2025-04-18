import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psGoogleBuzzIcon],svg[ps-google-buzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 190q0 58-41 105L283 156l114-96q65 55 65 130m-294 39L383 50Q317 5 232 5q-62 0-114 24T35 94zM64 316l91-76L25 109Q2 146 2 190q0 74 62 126m345-8L270 167l-101 84l-2 2v1l-30 26h-1l-42 33l-16 14q6 4 10 6q-13 36-37 71q50 21 119-37q28 7 62 7q108 0 177-66"></svg:path>`,
})
export class PsGoogleBuzzIcon {
  readonly viewBox = input("0 0 464 464")
  readonly width = input("1em")
  readonly height = input("1em")
}
