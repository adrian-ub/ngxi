import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCopyrightIcon],svg[bx-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2S2 6.579 2 12s4.579 10 10 10m0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8s-8-3.663-8-8s3.663-8 8-8"></svg:path><svg:path fill="currentColor" d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5"></svg:path>`,
})
export class BxCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
