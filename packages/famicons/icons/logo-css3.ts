import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoCss3Icon],svg[famicons-logo-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 32l35 403.22L255.77 480L413 435.15L448 32Zm290.68 334.9L256.07 395l-98.46-28.24l-6.75-77.76h48.26l3.43 39.56l53.59 15.16l.13.28l53.47-14.85l5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58Z"></svg:path>`,
})
export class FamiconsLogoCss3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
