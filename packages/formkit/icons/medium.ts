import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitMediumIcon],svg[formkit-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.66 3.04c0-.08 0-.15-.03-.22a.5.5 0 0 0-.14-.19L1.18 1.21V1h4.06l3.14 6.19L11.13 1H15v.21l-1.12.96s-.08.08-.11.13c-.02.05-.03.1-.02.16v7.08c0 .05 0 .11.02.16s.06.09.11.13l1.09.96V11H9.48v-.21l1.13-.99c.11-.1.11-.13.11-.28V3.79l-3.14 7.18h-.42L3.5 3.79v4.82c-.03.2.04.41.2.55l1.47 1.61v.21H1v-.21l1.47-1.61c.08-.07.14-.16.17-.26s.04-.2.02-.3z"></svg:path>`,
})
export class FormkitMediumIcon {
  readonly viewBox = input("0 0 16 12")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
