import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBill2SolidIcon],svg[streamline-bill-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.675c0-.824.696-1.45 1.5-1.45h11c.804 0 1.5.626 1.5 1.45v6.65c0 .824-.696 1.45-1.5 1.45h-11c-.804 0-1.5-.626-1.5-1.45zM4.9 7a2.1 2.1 0 1 1 4.2 0a2.1 2.1 0 0 1-4.2 0M3.004 7A.752.752 0 1 1 1.5 7a.752.752 0 0 1 1.504 0m8.744.752a.752.752 0 1 0 0-1.504a.752.752 0 0 0 0 1.504" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBill2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
