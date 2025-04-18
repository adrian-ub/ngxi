import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGenderNonBinaryIcon],svg[mdi-gender-non-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3h-2v2.27L9.04 4.13l-1 1.74L10 7L8.04 8.13l1 1.74L11 8.73v3.37a5 5 0 1 0 2 0V8.73l1.96 1.14l1-1.74L14 7l1.96-1.13l-1-1.74L13 5.27zm-1 17c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3"></svg:path>`,
})
export class MdiGenderNonBinaryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
